import "./Login.css";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

export const Login = ({ props }) => {
	const [passwordShown, setPasswordShown] = useState(false);

	const togglePasswordVisibility = () => {
		setPasswordShown(passwordShown ? false : true);
	};

	return (
		<div className="login">
			<h1>Log In</h1>
			<p>Already have an account? <span>Sign back in!</span></p>
			<form onSubmit={props.handleLogin}>
				<input
					onChange={(e) => props.setUsername(e.target.value)}
					placeholder="Username"
				/>
				<input
					onChange={(e) => props.setPassword(e.target.value)}
					placeholder="Password"
					type={passwordShown ? "text" : "password"}
				/>
				<div>
					<i onClick={togglePasswordVisibility}>{eye}</i>
				</div>
				<button type="submit">Log In &#8594;</button>
			</form>
		</div>
	);
};
