import "./Signup.css";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

export const Signup = ({ props }) => {
	const [passwordShown, setPasswordShown] = useState(false);

	const togglePasswordVisibility = () => {
		setPasswordShown(passwordShown ? false : true);
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
				/>
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
				<button type="submit">Sign Up &#8594;</button>
			</form>
		</div>
	);
};
