import { useEffect, useState } from "react";
import "./ShopDetails.css";

export const ShopDetails = ({ shops, shopNum }) => {
	const [shop, setShop] = useState();
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetchShop();
	}, []);

	const fetchShop = async () => {
		try {
			const response = await fetch(
				`${process.env.REACT_APP_REST_API}shop/details`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						name: shops[shopNum].name,
					}),
				}
			);
			const data = await response.json();
			console.log(data.shop);
			console.log(data.shop.reviews);
			setShop(data.shop);
			setReviews(data.shop.reviews);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			{shop && (
				<div className="shop">
					<h4>Shop Details</h4>
					<h1>{shop.name}</h1>
					<h3>{shop.location}</h3>
					<p>{shop.description}</p>

					<div className="shop-img">
						<img src={shop.url} alt="" />
					</div>

					<div>
						<h2>Reviews</h2>
						{reviews.map((review) => (
							<div key={review._id}>
								<h4>{review.username}</h4>
								<p>{review.text}</p>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};
