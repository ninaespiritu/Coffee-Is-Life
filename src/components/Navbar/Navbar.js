import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

export const Navbar = ({ props }) => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	return (
		<nav className="navbar">
			<ul className={click ? "nav-menu active" : "nav-menu"}>
				<Link to="/" style={{ textDecoration: "none" }}>
					<li className="nav-item" onClick={handleClick}>
						Home
					</li>
				</Link>
				<Link to="/profile" style={{ textDecoration: "none" }}>
					<li className="nav-item" onClick={handleClick}>
						Profile
					</li>
				</Link>
				<Link to="/" style={{ textDecoration: "none" }}>
					<li className="nav-item" onClick={props.handleLogout}>
						Logout
					</li>
				</Link>
			</ul>
			<div className="hamburger" onClick={handleClick}>
				{click ? (
					<div>
						<FontAwesomeIcon
							icon={faXmark}
							className="nav-icons active"
						/>
					</div>
				) : (
					<div>
						<FontAwesomeIcon icon={faBars} className="nav-icons" />
					</div>
				)}
			</div>
		</nav>
	);
};
