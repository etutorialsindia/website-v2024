import React from "react";
import API from "../modules/API";
let vapidKey="";
async function registerServiceWorker(){
    if(!("serviceWorker" in navigator))return false;
    if(!("PushManager" in window))return false;
    const registration = await navigator.serviceWorker.getRegistration();
    if(!!registration)return registration;
    return await navigator.serviceWorker.register('/sw.js');
}
async function checkSubscription(){
    const registration = await registerServiceWorker();
    if(!registration)return 0;
    const subscription = await registration.pushManager.getSubscription();
    return !subscription?1:2;
}
async function getVapidKey(){
    const api=new API();
    return await api.get("/api/v1/vapid");    
}

function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}
export default function SubscribePushNotification(){
    const [subscribed,setSubscribed]=new React.useState(0);
    getVapidKey().then(resp=>{
        vapidKey=resp.key;
    })
    checkSubscription()
    .then(r=>{setSubscribed(r)});
    async function subscribe(){
        if(!vapidKey || vapidKey===""){
            let temp=await getVapidKey();
            vapidKey=temp.key;
        }
        const registration=await registerServiceWorker();
        const subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlB64ToUint8Array(vapidKey)
        });
        const api=new API();
        await api.put("/api/v1/push",subscription);
        return setSubscribed(await checkSubscription());
    }
    async function unsubscribe(){
        const registration=await registerServiceWorker();
        const subscription = await registration.pushManager.getSubscription();
        if (!subscription) return setSubscribed(await checkSubscription());
        const api=new API();
        await api.delete("/api/v1/push",subscription);
        await subscription.unsubscribe();
        return setSubscribed(await checkSubscription());
    }
    return(<>
{(subscribed===0)?
    "":
    (subscribed===1)?
        <button onClick={subscribe} className="btn btn-primary">Subscribe</button>:
        <button onClick={unsubscribe} className="btn btn-primary">Unsubscribe</button>}
    </>)
}