import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { fetchLogin, fetchSignup } from "./utils";
import { Signup } from "./components/Signup/Signup";
import { Login } from "./components/Login/Login";
import { Home } from "./components/Home/Home";
import { Profile } from "./components/Profile/Profile";
import { Navbar } from "./components/Navbar/Navbar";
import { ShopDetails } from "./components/ShopDetails/ShopDetails";
import { LandingPage } from "./components/LandingPage/LandingPage";

const App = () => {
	const [user, setUser] = useState();
	const [email, setEmail] = useState();
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	const [shops, setShops] = useState([]);
	const [shopNum, setShopNum] = useState();

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
						<Navbar props={{ handleLogout }} />
						<Routes>
							<Route
								path="/"
								element={
									<Home
										shops={shops}
										setShops={setShops}
										setShopNum={setShopNum}
									/>
								}
							/>
							<Route
								path="/shop/details"
								element={
									<ShopDetails
										shops={shops}
										shopNum={shopNum}
										user={user}
									/>
								}
							/>
							<Route
								path="/profile"
								element={<Profile user={user} props={{ handleLogout }} />}
							/>
						</Routes>
					</Router>
				</div>
			) : (
				<div className="welcome">
					<div className="welcome-landing">
					<LandingPage />
					</div>
					<div id="getstarted" className="getstarted">
						<div className="getstarted-signup">
							<Signup
								props={{
									handleSignup,
									setEmail,
									setUsername,
									setPassword,
								}}
							/>
						</div>
						<div className="getstarted-login">
							<Login
								props={{
									handleLogin,
									setUsername,
									setPassword,
								}}
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default App;
