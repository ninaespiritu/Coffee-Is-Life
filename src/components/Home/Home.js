import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { home, item } from "../Animations";
import { fetchShops } from "../../utils";
import "./Home.css";

export const Home = ({ shops, setShops, setShopNum }) => {
	useEffect(() => {
		fetchShops(setShops);
		scrollToTop();
	}, []);

	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<div className="home">
			<motion.div
				variants={home}
				initial="hidden"
				animate="show"
				className="header"
			>
				<motion.div className="header-text">
					<motion.h1 variants={item}>Coffee is life.</motion.h1>
					<motion.p variants={item}>
						Browse through top-rated cafés, or discover new coffee
						shops in your area &mdash; whatever you're looking for,
						Coffee Is Life will have it all!
					</motion.p>
					<a href="#shop">
						<motion.button variants={item}>
							Explore &#8594;
						</motion.button>
					</a>
				</motion.div>
			</motion.div>

			<div id="shop" className="browse">
				<h2>Browse all cafés</h2>
				<div className="grid">
					{shops.map((shop, i) => (
						<motion.div
							whileHover={{
								scale: 1.035,
								boxShadow: "0 5px 20px rgba(0, 0, 0, 0.075)",
							}}
							key={shop._id}
							className="shops"
						>
							<Link
								to={`/shop/details`}
								onClick={() => setShopNum(i)}
							>
								<div className="shops-img">
									<img src={shop.url} alt="" />
								</div>
							</Link>
							<div className="shops-info">
								<h3>{shop.name}</h3>
								<p>{shop.location}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};
