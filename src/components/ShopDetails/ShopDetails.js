import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { item, container } from "../Animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faStar } from "@fortawesome/free-solid-svg-icons";
import "./ShopDetails.css";
import ShopReview from "./ShopReview";
import { fetchShop } from "../../utils";

export const ShopDetails = ({ shops, shopNum, user, setFavShops }) => {
	const [shop, setShop] = useState();
	// const [reviews, setReviews] = useState([]);
	const [newReviews, setNewReviews] = useState([]);

	useEffect(() => {
		fetchShop(shops, shopNum, setShop);
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

	const addFavShop = async () => {
		try {
			const response = await fetch(
				`${process.env.REACT_APP_REST_API}favourites`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						username: user.user.username,
						name: shops[shopNum].name,
						rating: averageAll,
						reviews: reviewsAll,
						url: shops[shopNum].url,
					}),
				}
			);
			const data = await response.json();
			console.log(data.newFavShop);
			setFavShops(data.newFavShop);
			alert(`${shops[shopNum].name} has been added to your Favourites.`);
		} catch (error) {
			console.log(error);
		}
	};

	// SUM (OLD REVIEW RATINGS)
	// let sumRating = 0;
	// let itemRating = null;

	// for (let i = 0; i < reviews.length; i++) {
	// 	itemRating = reviews[i];
	// 	sumRating = itemRating.rating + sumRating;
	// }

	// SUM (NEW REVIEW RATINGS)
	let sumNewRating = 0;
	let newRating = null;

	for (let i = 0; i < newReviews.length; i++) {
		newRating = newReviews[i];
		sumNewRating = newRating.rating + sumNewRating;
	}

	// AVERAGE RATING
	const reviewsAll = newReviews.length;
	const averageAll = (sumNewRating / reviewsAll).toFixed(2);
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
				<motion.div
					variants={container}
					initial="hidden"
					animate="show"
					className="shop"
				>
					<div className="shop-header">
						<motion.div variants={item} className="shop-header-text">
							<h4>Shop Details</h4>
							<h1>{shop.name}</h1>
							<div className="shop-rating">
								{reviewStar}
								<p>
									{averageAll}{" "}
									<span>({reviewsAll} Reviews)</span>
								</p>
							</div>
						</motion.div>
					</div>

					<div className="shop-info">
						<div className="shop-info-box">
							<motion.div variants={item} className="shop-text">
								<h4>Location</h4>
								<h3>{shop.location}</h3>
								<h4>Description</h4>
								<p>{shop.description}</p>
								<button onClick={() => addFavShop()}>
									Add to Favourites
								</button>
							</motion.div>

							<motion.div variants={item} className="shop-img">
								<img src={shop.url} alt="" />
							</motion.div>
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
								{/* {reviews.map((review) => (
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
								))} */}
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
				</motion.div>
			)}
		</div>
	);
};
