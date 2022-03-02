import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchShops } from "../../utils";
import "./Home.css";

export const Home = () => {
	const [shops, setShops] = useState([]);

	useEffect(() => {
		fetchShops(setShops);
	}, []);

	return (
		<div>
			<h1>Coffee is Life</h1>

			<div className="grid">
				{shops.map((shop) => (
					<div key={shop._id} className="shop">
						<h2>{shop.name}</h2>
						<p>{shop.location}</p>

						{/* <Link to={`/shop/${shop._id}`}> */}
						<Link to={`/shop/details`}>
							<div className="shop-img">
								<img src={shop.url} alt="" />
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};
