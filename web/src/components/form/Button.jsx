import React from "react";

export default function Button(attr) {
	return (
		<>
			<div className={attr.pclass}>
				<button onClick={attr.onClick} type={attr.type??"button"} className={attr.className}>{attr.label||attr.children}</button>
			</div>
		</>
	);
}
