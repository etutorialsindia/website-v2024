import React from "react";
import { NavLink } from "react-router-dom";
const data = [
	{
		name: "Privacy Policy",
		target: "/policy/privacy",
	},
	{
		name: "Cookie Policy",
		target: "/policy/cookie",
	},
	{
		name: "Cancellation Policy",
		target: "/policy/cancellation",
	},
	{
		name: "Refund Policy",
		target: "/policy/refund",
	},
	{
		name: "GDPR Compliance",
		target: "/policy/gdpr",
	},
	{
		name: "Querries and Support",
		target: "/support",
	},
];

export default function FooterNavbar() {
	return (
		<ul className="footernav">
			{data.map((link, index) => {
				return (
					<li key={`navlink-${index}`}>
						<NavLink to={link.target}>{link.name}</NavLink>
					</li>
				);
			})}
		</ul>
	);
}
