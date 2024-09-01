import React from "react";

export default function Radio(attr) {
	return (
		<div className={attr.pclass}>
			<input type="radio" name={attr.name} id={attr.id||attr.name + attr.value} value={attr.value} checked={attr.checked||false} />
			<label htmlFor={attr.id||attr.name+attr.value}>{attr.label||attr.children||attr.value}</label>
		</div>
	);
}
