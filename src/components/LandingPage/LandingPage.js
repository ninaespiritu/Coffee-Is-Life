import "./LandingPage.css";
import Logo from "../../images/logo.png";
import Coffee from "../../images/landing-coffee.png";

export const LandingPage = () => {
	return (
		<div className="landing">
			<div className="landing-logo">
				<img src={Logo} alt="" />
				<h4>Coffee Is Life</h4>
			</div>
			<div className="landing-page">
				<div className="landing-text">
					<h1> Find your perfect cup of coffee today.</h1>
					<p>
						We help you find your next favourite shop for your
						coffee needs. Explore hundreds of cafés, and view
						ratings and reviews published by fellow coffee lovers.
					</p>
					<a href="#getstarted">
						<button>Get Started &#8594;</button>
					</a>
				</div>

				<div className="landing-img">
					<img src={Coffee} alt="" />
				</div>
			</div>
		</div>
	);
};
