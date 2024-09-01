import React from "react";
import Image from "../../components/Image";
import "../../styles/home-features.scss";
import { Section } from "../../components";

const features = [
	{
		name: "Live class",
		image: "liveclass.png",
	},
	{
		name: "Recorded class",
		image: "recordedclass.png",
	},
	{
		name: "Online Quiz",
		image: "quiz.png",
	},
	{
		name: "Periodic asessments",
		image: "asessments.png",
	},
	{
		name: "Notes",
		image: "notes.png",
	},
	{
		name: "Online Support",
		image: "support.png",
	},
];
function Feature(attr) {
	return (
		<>
			<div className="card">
				<div className="dp">
					<Image src={`/images/features/${attr.image}`} alt={attr.name} />
				</div>
				<div className="name">{attr.name}</div>
			</div>
		</>
	);
}
export default function Features() {
	return (
		<>
		<Section title="We cover every aspect of education">
			<div className="features">
				{features.map((feature, index) => (
					<Feature key={"feature" + index} {...feature} />
				))}
			</div>
		</Section>
		</>
	);
}
