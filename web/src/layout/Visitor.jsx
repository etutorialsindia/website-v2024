import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, SubscribePushNotification } from "../components";
import "../styles/visitor.scss";
export default function Home() {
	const [sticky,setSticky]=React.useState(false);
	const [resolution,setResolution]=React.useState(`${window.innerWidth} x ${window.innerHeight}`)
	React.useLayoutEffect(()=>{
		function updateResolution(){
			setResolution(`${window.innerWidth} x ${window.innerHeight}`)
		}
		window.addEventListener("resize",updateResolution);
		window.addEventListener("scroll",(e)=>{
			if(window.scrollY > 100){
				setSticky(true);
				return;
			}
			setSticky(false);
		})
	})
	return (
		<div className={(sticky?"fixed":"")}>
			<Header  />
			{/* <SubscribePushNotification /> */}
			<div className="content">
				<Outlet />
			</div>
			<Footer />
			{/* <span className="resolution">{resolution}</span> */}
		</div>
	);
}
