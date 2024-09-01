import React from "react";
export default function Input(attr) {
	const global=(!!attr.onChange);
    const [value,setValue]=React.useState(attr.value||"");
    function updateValue(e){
		if("onChange" in attr)
		attr.onChange(e);
        let target=e.target;
        setValue(target.value);
    }
	return (
		<div className={((global?(attr.value.length ===0):(value.length===0))?"blank":"") + " form-group"}>
			<input
				type={attr.type}
				name={attr.name}
				id={attr.id || attr.name}
                value={global?attr.value:value}
                onChange={updateValue}
				required={attr.required||false}
			/>
			<label htmlFor={attr.id || attr.name}>{attr.label}</label>
			<span className="error">{attr.error || ""}</span>
		</div>
	);
}
