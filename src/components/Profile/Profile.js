import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocationDot,
	faStar,
	faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import Avatar from "../../images/profile-avatar.jpg";
import "../ShopDetails/ShopDetails.css";
import "./Profile.css";

export const Profile = ({ user, props }) => {
	const [reviews, setReviews] = useState([]);
	const [favShops, setFavShops] = useState([]);

	useEffect(() => {
		viewProfile();
	}, []);

	const viewProfile = async () => {
		try {
			const response = await fetch(
				`${process.env.REACT_APP_REST_API}findUser`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						username: user.user.username,
					}),
				}
			);
			const data = await response.json();
			console.log(data);
			setReviews(data.reviews);
			setFavShops(data.favourites);
		} catch (error) {
			console.log(error);
		}
	};

	const deleteReview = async (props) => {
		try {
			const response = await fetch(
				`${process.env.REACT_APP_REST_API}review`,
				{
					method: "DELETE",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						_id: props,
					}),
				}
			);
			const data = await response.json();
			console.log(data.removeReview);
			viewProfile();
		} catch (error) {
			console.log(error);
		}
	};

	const deleteFavShop = async (props) => {
		try {
			const response = await fetch(
				`${process.env.REACT_APP_REST_API}favourites`,
				{
					method: "DELETE",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						_id: props,
					}),
				}
			);
			const data = await response.json();
			console.log(data.removeFavShop);
			viewProfile();
		} catch (error) {
			console.log(error);
		}
	};

	// AVERAGE RATING
	let myRatingSum = 0;
	let myRating = null;

	for (let i = 0; i < reviews.length; i++) {
		myRating = reviews[i];
		myRatingSum = myRating.rating + myRatingSum;
	}
	const myRatingAverage = (myRatingSum / reviews.length).toFixed(2);
	// console.log(myRatingAverage);

	// ICONS
	const iconStar = <FontAwesomeIcon icon={faStar} className="rating-icon" />;
	const iconBin = <FontAwesomeIcon icon={faTrashCan} size="lg" className="bin-icon" />;
	const iconLocation = (
		<FontAwesomeIcon icon={faLocationDot} className="location-icon" />
	);

	return (
		<div className="profile">
			<div className="profile-box">
				<div className="profile-header">
					<div className="profile-info">
						<div className="profile-img">
							<img src={Avatar} alt="" />
						</div>
						<div className="profile-info-text">
							<h2>
								{user ? user.user.username : "Not logged in"}
							</h2>
							<p>{user.user.email}</p>
							<div className="profile-stats">
								<div className="stats">
									<h4>Reviews</h4>
									<h3>{reviews.length}</h3>
								</div>
								<div className="stats">
									<h4>Average Rating</h4>
									<h3>
										{reviews.length === 0
											? 0
											: myRatingAverage}
									</h3>
								</div>
								<div className="stats">
									<h4>Favourites</h4>
									<h3>{favShops.length}</h3>
								</div>
							</div>
						</div>
					</div>
					<div className="profile-buttons">
						<button>Edit Profile</button>
						<Link to="/" style={{ width: "100%" }}>
							<button onClick={props.handleLogout}>Logout</button>
						</Link>
					</div>
				</div>

				<div className="info">
					<div className="favourites">
						<h2>Favourites</h2>
						{favShops.length === 0 ? (
							<h3>No favourite shops</h3>
						) : (
							<div>
								{favShops.map((fav) => (
									<div key={fav._id} className="favshop">
										<div className="favshop-header">
											<div className="favshop-text">
												<h4>{fav.name}</h4>
												<p>
													{iconStar}
													<span>{fav.rating}</span>(
													{fav.reviews} Reviews)
												</p>
											</div>
											<button
												onClick={() =>
													deleteFavShop(fav._id)
												}
											>
												{iconBin}
											</button>
										</div>
										<div className="favshop-img">
											<img src={fav.url} alt="" />
										</div>
									</div>
								))}
							</div>
						)}
					</div>

					<div className="my-reviews">
						<h2>My Reviews</h2>
						{reviews.length === 0 ? (
							"You have not published any reviews. Write your first review today!"
						) : (
							<div>
								{reviews.map((review) => (
									<div key={review._id} className="my-review">
										<div className="my-review-user">
											<div className="my-review-header">
												<div>{iconLocation}</div>
												<h4>{review.name}</h4>
											</div>
											<button
												onClick={() =>
													deleteReview(review._id)
												}
											>
												{iconBin}
											</button>
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
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
