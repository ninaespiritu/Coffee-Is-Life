import { useState } from "react";
import "./App.css";
import { fetchSignup } from "./utils";
import { Signup } from "./components/Signup/Signup";

const App = () => {
	const [user, setUser] = useState();
	const [email, setEmail] = useState();
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const handleSignup = async (e) => {
		e.preventDefault();
		fetchSignup(setUser, email, username, password);
	};

	return (
		<div>
			<h1>{user ? `Welcome ${user.user.username}` : "Sign Up"}</h1>
			<Signup
				props={{ handleSignup, setEmail, setUsername, setPassword }}
			/>
		</div>
	);
};

export default App;
