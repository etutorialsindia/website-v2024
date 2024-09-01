import React from "react";
import { NavLink } from "react-router-dom";
const data = [
	{
		name: "Home",
		target: "/",
	},
	{
		name: "About",
		target: "/about",
	},
	{
		name: "Courses",
		target: "/courses",
	},
	{
		name: "Contact Us",
		target: "/contact",
	},
];
export default function Navbar() {
	let links = data.map((link, index) => {
        // console.log(isActive)
		return (
			<li key={`navlink-${index}`}>
				<NavLink to={link.target}>{link.name}</NavLink>
			</li>
		);
	});
	return <ul className="nav">{links}</ul>;
}
