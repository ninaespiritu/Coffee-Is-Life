import "./Login.css";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const eye2 = <FontAwesomeIcon icon={faEyeSlash} />;

export const Login = ({ props }) => {
	const [passwordShown, setPasswordShown] = useState(false);
	const [showEye, setShowEye] = useState(true);

	const togglePasswordVisibility = () => {
		setPasswordShown(passwordShown ? false : true);
		setShowEye(!showEye);
	};

	return (
		<div className="login">
			<h1>Log In</h1>
			<p>Already have an account? <span>Sign back in!</span></p>
			<form onSubmit={props.handleLogin}>
				<input
					onChange={(e) => props.setUsername(e.target.value)}
					placeholder="Username"
					type="text"
					required
				/>
				<input
					onChange={(e) => props.setPassword(e.target.value)}
					placeholder="Password"
					type={passwordShown ? "text" : "password"}
					required
				/>
				<div>
					<i onClick={togglePasswordVisibility}>{showEye ? eye2 : eye}</i>
				</div>
				<button type="submit">Log In &#8594;</button>
			</form>
		</div>
	);
};
