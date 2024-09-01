import React from "react";

export default function RadioGroup(attr) {
	return (
		<div className="form-group">
			<div className="label">{attr.label || attr.name}</div>
			<div className="options">
				{attr.values.map((val, index) => (
                    <div className="option" key={attr.name + index}>
						<input
							type="radio"
							name={attr.name}
							id={attr.name + index}
							value={typeof val === "object" ? val.value : val}
						/>
						<label htmlFor={attr.name + index}>
							{typeof val === "object" ? val.name : val}
						</label>
					</div>
				))}
			</div>
		</div>
	);
}
