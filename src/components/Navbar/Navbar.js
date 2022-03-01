import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	return (
		<nav className="navbar">
			<ul className={click ? "nav-menu active" : "nav-menu"}>
				<Link to="/" style={{ textDecoration: "none" }}>
					<li className="nav-item">Home</li>
				</Link>
				<Link to="/profile" style={{ textDecoration: "none" }}>
					<li className="nav-item">Profile</li>
				</Link>
			</ul>
			<div className="hamburger" onClick={handleClick}>
				{click ? "✖" : "Menu"}
			</div>
		</nav>
	);
};