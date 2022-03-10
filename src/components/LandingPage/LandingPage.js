import { motion } from "framer-motion";
import { image, item, container } from "../Animations";
import "./LandingPage.css";
import Logo from "../../images/logo.png";
import Coffee from "../../images/landing-coffee.png";

export const LandingPage = () => {
	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="show"
			className="landing"
		>
			<div className="landing-logo">
				<img src={Logo} alt="" />
				<h4>Coffee Is Life</h4>
			</div>
			<div className="landing-page">
				<motion.div className="landing-text">
					<motion.h1 variants={item}>
						Find your perfect cup of coffee today.
					</motion.h1>
					<motion.p variants={item}>
						We help you find your next favourite shop for your
						coffee needs. Explore hundreds of cafés, and view
						ratings and reviews published by fellow coffee lovers.
					</motion.p>
					<a href="#getstarted">
						<motion.button variants={item}>
							Get Started &#8594;
						</motion.button>
					</a>
				</motion.div>

				<motion.div variants={image} className="landing-img">
					<img src={Coffee} alt="" />
				</motion.div>
			</div>
		</motion.div>
	);
};
