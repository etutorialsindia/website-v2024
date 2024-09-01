import React from "react";
import Input from "../../components/form/Input";
import "../../styles/form/login.scss";
import Form from "../../components/form/Form";
import RadioGroup from "../../components/form/RadioGroup";
import Button from "../../components/form/Button";

export default function Register() {
    const genders = [
		{ name: "Male", value: "m" },
		{ name: "Female", value: "f" },
		{ name: "Other", value: "o" },
	];
    function register(){
        console.log(`user registration`);
    }

	return (
		<div className="form-container">
			<Form method="post" action="/api/v1/register" title="Register">
				<Input required={true} type="text" name="fn" label="First Name" />
				<Input required={true} type="text" name="ln" label="Last Name" />
				<Input required={true} type="email" name="email" label="E-Mail" />
				<Input required={true} type="tel" name="phone" label="Contact Number" />
				<RadioGroup name="gender" label="Gender" values={genders} />
				<Input type="date" name="dob" label="Date of Birth" />
				<Button
					pclass="form-group"
					className="btn btn-primary"
					label="Register"
					onClick={register}
				/>
			</Form>
		</div>
	);
}
