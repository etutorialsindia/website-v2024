import React from "react";
import Logo from "./Logo";
import Social from "./Social";
import FooterNavbar from "./FooterNavbar";
import "../styles/footer.scss";
export default function Footer() {
	const message =
		"Founded by Mr. Om Prakash Tiwari, who brings 18 years of industry experience and over 8 years of teaching expertise, eTutorials is committed to delivering education that bridges the gap between theoretical knowledge and real-world application. Mr. Tiwari has personally worked on more than 18 large-scale projects, ensuring that our courses are not only academically rigorous but also practically relevant.";
	return (
		<footer>
			<div className="top">
				<div className="logo">
					<Logo />
					<p className="message">{message}</p>
					<div className="title">Follow us on </div>
					<Social />
				</div>
				<FooterNavbar />
			</div>
			<div className="copyright">&copy; 2023 E-Tutorials</div>
		</footer>
	);
}
