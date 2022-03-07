import { useEffect, useState } from "react";
import "./ShopDetails.css";
import ShopReview from "./ShopReview";

export const ShopDetails = ({ shops, shopNum, user }) => {
	const [shop, setShop] = useState();
	const [reviews, setReviews] = useState([]);
	const [newReviews, setNewReviews] = useState([]);

	useEffect(() => {
		fetchShop();
		fetchReview();
	}, []);

	const fetchReview = async () => {
		try {
			const response = await fetch(
				`${process.env.REACT_APP_REST_API}findShop`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						name: shops[shopNum].name,
					}),
				}
			);
			const data = await response.json();
			console.log(data.reviews);
			setNewReviews(data.reviews);
		} catch (error) {
			console.log(error);
		}
	};

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
		<div className="shopdetails">
			{shop && (
				<div className="shop">
					<div className="shop-header">
						<div className="shop-header-text">
							<h4>Shop Details</h4>
							<h1>{shop.name}</h1>
						</div>
					</div>

					<div className="shop-info">
						<div className="shop-info-box">
							<div className="shop-text">
								<h4>Location</h4>
								<h3>{shop.location}</h3>
								<h4>Description</h4>
								<p>{shop.description}</p>
							</div>

							<div className="shop-img">
								<img src={shop.url} alt="" />
							</div>
						</div>
					</div>

					<div className="reviews">
						<div className="reviews-box">
							<div className="add-review">
								<ShopReview
									shops={shops}
									shopNum={shopNum}
									user={user}
								/>
							</div>

							<div className="list-review">
								<h2>Reviews</h2>
								{reviews.map((review) => (
									<div key={review._id} className="review">
										<h4>{review.username}</h4>
										<p>
											<span>
												Rating: {review.rating}/10
											</span>
										</p>
										<p>{review.text}</p>
									</div>
								))}
								{newReviews.map((review) => (
									<div key={review._id} className="review">
										<h4>{review.username}</h4>
										<p>
											<span>
												Rating: {review.rating}/10
											</span>
										</p>
										<p>{review.text}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
