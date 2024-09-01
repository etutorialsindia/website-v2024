import React, { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import MemberZone from "./MemberZone";
import "../styles/header.scss";
export default function Header() {
	const [headerActive, setHeaderActive] = useState(false);
	function toggleNavbar() {
		setHeaderActive(!headerActive);
	}
	return (
		<header className={headerActive ? "active" : "inactive"}>
			<div className="logo-area">
				<Logo />
				<a onClick={toggleNavbar} className="hamburger">
					<i className="fa-solid fa-bars"></i>
					<i className="fa fa-times"></i>
				</a>
			</div>
			<Navbar />
			<MemberZone />
		</header>
	);
}
