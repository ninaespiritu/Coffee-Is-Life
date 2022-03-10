import "./Signup.css";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const eye2 = <FontAwesomeIcon icon={faEyeSlash} />;

export const Signup = ({ props }) => {
	const [passwordShown, setPasswordShown] = useState(false);
	const [showEye, setShowEye] = useState(true);

	const togglePasswordVisibility = () => {
		setPasswordShown(passwordShown ? false : true);
		setShowEye(!showEye);
	};
	return (
		<div className="signup">
			<h1>Create an account</h1>
			<p>Join our community of coffee lovers and enthusiasts.</p>
			<p>Sign up for Coffee Is Life today &mdash; <span>it's free!</span></p>
			<form onSubmit={props.handleSignup}>
				<input
					onChange={(e) => props.setEmail(e.target.value)}
					placeholder="Email"
					type="email"
					required
				/>
				<input
					onChange={(e) => props.setUsername(e.target.value)}
					placeholder="Username"
					type="text"
					minLength="6"
					maxLength="20"
					required
				/>
				<input
					onChange={(e) => props.setPassword(e.target.value)}
					placeholder="Password"
					type={passwordShown ? "text" : "password"}
					minLength="8"
					maxLength="20"
					required
				/>
				<div>
					<i onClick={togglePasswordVisibility}>{showEye ? eye2 : eye}</i>
				</div>
				<button type="submit">Sign Up &#8594;</button>
			</form>
		</div>
	);
};
