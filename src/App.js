import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { fetchLogin, fetchSignup } from "./utils";
import { Signup } from "./components/Signup/Signup";
import { Login } from "./components/Login/Login";
import { HomePage } from "./components/HomePage/HomePage";
import { Profile } from "./components/Profile/Profile";
import { Navbar } from "./components/Navbar/Navbar";

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

	const handleLogout = async () => {
		if (user) {
			setUser(null);
		}
	};

	return (
		<div>
			{user ? (
				<div className="app">
					<Router>
						<Navbar props={{handleLogout}} />
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route
								path="/profile"
								element={<Profile user={user} />}
							/>
						</Routes>
					</Router>
				</div>
			) : (
				<div>
					<Signup
						props={{
							handleSignup,
							setEmail,
							setUsername,
							setPassword,
						}}
					/>
					<Login props={{ handleLogin, setUsername, setPassword }} />
				</div>
			)}
		</div>
	);
};

export default App;
