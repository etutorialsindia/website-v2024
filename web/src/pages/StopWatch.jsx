import React from "react";
// import { useEffect } from "react/cjs/react.production.min";

export default function StopWatch(){
    const [timer,setTimer]=React.useState(0);
    let time=new Date(timer * 1000);
    setTimeout(()=>{
        setTimer(timer+1);
    },1000);
    return(<>
    <h1>{time.getUTCHours()}</h1>
    <h2>{time.getUTCMinutes()}</h2>
    <h2>{time.getUTCSeconds()}</h2>
    </>)
}