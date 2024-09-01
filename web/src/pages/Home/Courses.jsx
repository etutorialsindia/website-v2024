import React from "react";
import "../../styles/courses.scss";
import Image from "../../components/Image";
const data = [
	{
		name: "PHP- for beginers",
		image: "php.png",
		duration: "1 Month (20 sessions)",
		category: "web-development",
		requisite: ["Basic HTML", "Basic Javascript", "Basic CSS"],
		mode: "Instructor lead class",
		fee: 2323,
		summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, amet!`,
	},{
		name: "PHP- for beginers",
		image: "php.png",
		duration: "1 Month (20 sessions)",
		category: "web-development",
		requisite: ["Basic HTML", "Basic Javascript", "Basic CSS"],
		mode: "Instructor lead class",
		fee: 2323,
		summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, amet!`,
	},{
		name: "PHP- for beginers",
		image: "php.png",
		duration: "1 Month (20 sessions)",
		category: "web-development",
		requisite: ["Basic HTML", "Basic Javascript", "Basic CSS"],
		mode: "Instructor lead class",
		fee: 2323,
		summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, amet!`,
	},{
		name: "PHP- for beginers",
		image: "php.png",
		duration: "1 Month (20 sessions)",
		category: "web-development",
		requisite: ["Basic HTML", "Basic Javascript", "Basic CSS"],
		mode: "Instructor lead class",
		fee: 2323,
		summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, amet!`,
	},{
		name: "PHP- for beginers",
		image: "php.png",
		duration: "1 Month (20 sessions)",
		category: "web-development",
		requisite: ["Basic HTML", "Basic Javascript", "Basic CSS"],
		mode: "Instructor lead class",
		fee: 2323,
		summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, amet!`,
	},{
		name: "PHP- for beginers",
		image: "php.png",
		duration: "1 Month (20 sessions)",
		category: "web-development",
		requisite: ["Basic HTML", "Basic Javascript", "Basic CSS"],
		mode: "Instructor lead class",
		fee: 2323,
		summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, amet!`,
	},{
		name: "PHP- for beginers",
		image: "php.png",
		duration: "1 Month (20 sessions)",
		category: "web-development",
		requisite: ["Basic HTML", "Basic Javascript", "Basic CSS"],
		mode: "Instructor lead class",
		fee: 2323,
		summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, amet!`,
	},{
		name: "PHP- for beginers",
		image: "php.png",
		duration: "1 Month (20 sessions)",
		category: "web-development",
		requisite: ["Basic HTML", "Basic Javascript", "Basic CSS"],
		mode: "Instructor lead class",
		fee: 2323,
		summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, amet!`,
	},{
		name: "PHP- for beginers",
		image: "php.png",
		duration: "1 Month (20 sessions)",
		category: "web-development",
		requisite: ["Basic HTML", "Basic Javascript", "Basic CSS"],
		mode: "Instructor lead class",
		fee: 2323,
		summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, amet!`,
	},{
		name: "PHP- for beginers",
		image: "php.png",
		duration: "1 Month (20 sessions)",
		category: "web-development",
		requisite: ["Basic HTML", "Basic Javascript", "Basic CSS"],
		mode: "Instructor lead class",
		fee: 2323,
		summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, amet!`,
	},
	{
		name: "PHP- for beginers",
		image: "php.png",
		duration: "1 Month (20 sessions)",
		category: "web-development",
		requisite: ["Basic HTML", "Basic Javascript", "Basic CSS"],
		mode: "Instructor lead class",
		fee: 2323,
		summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, amet!`,
	},
	{
		name: "PHP- for beginers",
		image: "php.png",
		duration: "1 Month (20 sessions)",
		category: "web-development",
		requisite: ["Basic HTML", "Basic Javascript", "Basic CSS"],
		mode: "Instructor lead class",
		fee: 2323,
		summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, amet!`,
	},
	{
		name: "PHP- for beginers",
		image: "php.png",
		duration: "1 Month (20 sessions)",
		category: "web-development",
		requisite: ["Basic HTML", "Basic Javascript", "Basic CSS"],
		mode: "Instructor lead class",
		fee: 2323,
		summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, amet!`,
	},
	{
		name: "PHP- for beginers",
		image: "php.png",
		duration: "1 Month (20 sessions)",
		category: "web-development",
		requisite: ["Basic HTML", "Basic Javascript", "Basic CSS"],
		mode: "Instructor lead class",
		fee: 2323,
		summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, amet!`,
	},
];
function formatCurrency(number,language="en-IN",type="currency",currency="INR"){
	return new Intl.NumberFormat(language,{style:type,currency}).format(number)
}
function Course(course) {
	
	return (
		<div className="card">
			<div className="name">{course.name}</div>
			<div className="image-container">
				<Image src={`/images/courses/${course.image}`} alt={course.name} />
			</div>
			<div className="classinfo">
				<div className="mode">{course.mode}</div>
				<div className="category">{course.category}</div>
			</div>
            <div className="info">
				<div className="duration">{course.duration}</div>
				<div className="fee">{formatCurrency(course.fee)}</div>
			</div>
			<div className="summary">{course.summary}</div>
			<div className="actions">
				<button className="btn btn-primary">Table of Content</button>
				<button className="btn btn-primary">Register Now</button>
			</div>
		</div>
	);
}
export default function Courses() {
	let cards = data.map((course,index) => {
		return <Course key={`course-${index}`} {...course}  />;
	});
	return <>
	<h2>Courses we offer</h2>
	<div className="course-cards">{cards}</div>
	</> 
}
