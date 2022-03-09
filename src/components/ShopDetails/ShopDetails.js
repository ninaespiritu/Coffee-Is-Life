import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faStar } from "@fortawesome/free-solid-svg-icons";
import "./ShopDetails.css";
import ShopReview from "./ShopReview";
import { fetchShop, fetchReview } from "../../utils";

export const ShopDetails = ({ shops, shopNum, user }) => {
	const [shop, setShop] = useState();
	const [reviews, setReviews] = useState([]);
	const [newReviews, setNewReviews] = useState([]);

	useEffect(() => {
		fetchShop(shops, shopNum, setShop, setReviews);
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

	// SUM (OLD REVIEW RATINGS)
	let sumRating = 0;
	let itemRating = null;

	for (let i = 0; i < reviews.length; i++) {
		itemRating = reviews[i];
		sumRating = itemRating.rating + sumRating;
	}

	// SUM (NEW REVIEW RATINGS)
	let sumNewRating = 0;
	let newRating = null;

	for (let i = 0; i < newReviews.length; i++) {
		newRating = newReviews[i];
		sumNewRating = newRating.rating + sumNewRating;
	}

	// AVERAGE RATING
	const reviewsAll = reviews.length + newReviews.length;
	const averageAll = ((sumRating + sumNewRating) / reviewsAll).toFixed(2);
	console.log(averageAll);

	// ICONS
	const userAvatar = (
		<FontAwesomeIcon icon={faCircleUser} className="review-icons" />
	);
	const reviewStar = (
		<FontAwesomeIcon icon={faStar} className="star-icon" size="lg" />
	);

	return (
		<div className="shopdetails">
			{shop && (
				<div className="shop">
					<div className="shop-header">
						<div className="shop-header-text">
							<h4>Shop Details</h4>
							<h1>{shop.name}</h1>
							<div className="shop-rating">
								{reviewStar}
								<p>
									{averageAll}{" "}
									<span>({reviewsAll} Reviews)</span>
								</p>
							</div>
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
									fetchReview={fetchReview}
								/>
							</div>

							<div className="list-review">
								<h2>Reviews</h2>
								{reviews.map((review) => (
									<div key={review._id} className="review">
										<div className="review-user">
											<div>{userAvatar}</div>
											<h4>{review.username}</h4>
										</div>
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
										<div className="review-user">
											<div>{userAvatar}</div>
											<h4>{review.username}</h4>
										</div>
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
