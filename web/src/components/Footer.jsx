import React from "react";
import Logo from "./Logo";
import Social from "./Social";
import FooterNavbar from "./FooterNavbar";
import "../styles/footer.scss";
export default function Footer() {
	const message =
		"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos hic deleniti cumque iure laborum voluptatum obcaecati modi voluptates quod culpa!";
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
