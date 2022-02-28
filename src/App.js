import { useState } from "react";
import "./App.css";
import { fetchLogin, fetchSignup } from "./utils";
import { Signup } from "./components/Signup/Signup";
import { Login } from "./components/Login/Login";

const App = () => {
	const [user, setUser] = useState();
	const [email, setEmail] = useState();
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const handleSignup = async (e) => {
		e.preventDefault();
		fetchSignup(setUser, email, username, password);
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		fetchLogin(setUser, username, password);
	};

	return (
		<div>
			<h1>{user ? `Welcome ${user.user.username}` : "Get Started"}</h1>
			<Signup
				props={{ handleSignup, setEmail, setUsername, setPassword }}
			/>
			<Login props={{ handleLogin, setUsername, setPassword }} />
		</div>
	);
};

export default App;
