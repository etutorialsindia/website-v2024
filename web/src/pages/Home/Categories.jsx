import React from "react";
import "../../styles/home-categories.scss"
import { API } from "../../modules"
import { Section } from "../../components";

function Category(category) {

	return <div className="category">
		<div className="icon">
			<i className={ category.icon }></i>
		</div>
		<span>{ category.name }</span>
	</div>;
}
export default function Categories() {
	const [data, setData] = React.useState([]);
	React.useEffect(() => {
		const api = new API("/api/v1/categories");
		api.get("").then(resp => {
			if ("data" in resp) setData(resp.data)
		})
	}, [])
	return (
		<>
			<Section title="Popular Categories">
				<div className="categories">
					{ data.map((crs, index) => {
						return <Category key={ `category-${index}` } { ...crs } />;
					}) }
				</div>
			</Section>

		</>
	);
}
