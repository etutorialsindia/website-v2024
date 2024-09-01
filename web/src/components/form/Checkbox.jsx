import React from "react";

export default function Checkbox(attr) {
	return (
		<div className={attr.pclass}>
			<input type="checkbox" name={attr.name} id={attr.id||attr.name} defaultChecked={attr.checked||false} />
			<label htmlFor={attr.id||attr.name}>{attr.label||attr.children}</label>
		</div>
	);
}
