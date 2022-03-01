import { useEffect, useState } from "react";
import "./HomePage.css";

export const HomePage = () => {
	const [shops, setShops] = useState([]);

	useEffect(() => {
		fetchShops();
	}, []);

	const fetchShops = async () => {
		try {
			const response = await fetch(`${process.env.REACT_APP_REST_API}shop`, {
				method: "GET",
				headers: { "Content-Type": "application/json" },
			});
			const data = await response.json();
			console.log(data.shops);
			setShops(data.shops);
		} catch (error) {
			console.log(error);
		}
	};
	
	return (
		<div>
			<h1>Coffee is Life</h1>

			<div className="grid">
				{shops.map((shop) => (
					<div key={shop._id} className="shop">
						<h2>{shop.name}</h2>
						<p>{shop.location}</p>
						<div className="shop-img">
							<img src={shop.url} alt="" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
