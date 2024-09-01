import React from "react";
import "../styles/logo.scss";
import Image from "./Image";
function goToHomepage(){
	console.log("reloading")
	window.location.pathname="/"
}
export default function Logo() {
	return (
		<>
			<Image onClick={goToHomepage} src="/images/logo/logo_64.png" alt="Logo E-Tutorials" />
		</>
	);
}
