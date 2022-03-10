import { useEffect } from "react";
import { Link } from "react-router-dom";
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
			<div className="header">
				<div className="header-text">
					<h1>Coffee is life.</h1>
					<p>
						Browse through top-rated cafés, or discover new coffee
						shops in your area &mdash; whatever you're looking for,
						Coffee Is Life will have it all!
					</p>
					<a href="#shop">
						<button>Explore &#8594;</button>
					</a>
				</div>
			</div>

			<div id="shop" className="browse">
				<h2>Browse all cafés</h2>
				<div className="grid">
					{shops.map((shop, i) => (
						<div key={shop._id} className="shops">
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
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
