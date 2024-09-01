import React from "react";
import Input from "../../components/form/Input";
import "../../styles/form/login.scss";
import Checkbox from "../../components/form/Checkbox";
import Form from "../../components/form/Form";
export default function Login() {
	return (
		<div className="form-container">
			 <Form action="/api/v1/login" method="post" title="Authentication Required">
				<Input type="text" name="user" label="Username" />
				<Input type="password" name="pass" label="Password" />
				<Checkbox pclass="form-group-concent" name="remember" checked={false}>
					Remember me on this computer
				</Checkbox>
				<div className="form-group-links">
					<a href="/user/register" className="align-right">
						Register
					</a>
					<a href="/user/forgot" className="align-left">
						Forgot Password
					</a>
				</div>
				<div className="form-group right">
					<button className="btn btn-primary">Login</button>
				</div>
			</Form> 
		</div>
	);
}
