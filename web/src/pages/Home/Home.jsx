import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import Courses from "./Courses";
import Features from "./Features";
export default function Home() {
	document.title = "Home";
	return (
		<>
			<Banner />
			<Categories />
			<Courses />
			<Features />
		</>
	);
}
