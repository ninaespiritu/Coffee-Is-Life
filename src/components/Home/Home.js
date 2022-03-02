import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchShops } from "../../utils";
import "./Home.css";

export const Home = ({ shops, setShops, setShopNum }) => {
	useEffect(() => {
		fetchShops(setShops);
	}, []);

	return (
		<div>
			<h1>Coffee is Life</h1>

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

						<h2>{shop.name}</h2>
						<p>{shop.location}</p>
					</div>
				))}
			</div>
		</div>
	);
};
