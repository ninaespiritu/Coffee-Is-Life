import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrashCan } from "@fortawesome/free-solid-svg-icons";
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
	const reviewStar = <FontAwesomeIcon icon={faStar} className="star-icon" />;
	const reviewBin = (
		<FontAwesomeIcon icon={faTrashCan} className="bin-icon" />
	);

	return (
		<div className="profile">
			<div className="profile-box">
				<div className="profile-header">
					<div className="profile-img">
						<img src={Avatar} alt="" />
					</div>
					<div className="profile-header-text">
						<h1>{user ? user.user.username : "Not logged in"}</h1>
						<p>{user.user.email}</p>
						<button>Edit Profile</button>
						<Link to="/">
							<button onClick={props.handleLogout}>Logout</button>
						</Link>
					</div>
				</div>

				<div className="info">
					<div className="sidebar">
						<div className="sidebar-contributions">
							<h4>Contributions</h4>
							{reviews.length === 0 ? (
								<h3>No reviews posted</h3>
							) : (
								<div>
									<h3>
										<span>{reviews.length}</span> Total
										Reviews
									</h3>
									<h3>
										<span>{myRatingAverage}</span> Average
										Rating
									</h3>
								</div>
							)}
						</div>
						<div>
							<h4>Favourites</h4>
							<div>
								{favShops.map((fav) => (
									<div key={fav._id}>
										<h3>{fav.name}</h3>
										<p>{fav.average}</p>
										<button>Remove from Favourites</button>
									</div>
								))}
							</div>
						</div>
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
												<div>{reviewStar}</div>
												<h4>{review.name}</h4>
											</div>
											<button
												onClick={() =>
													deleteReview(review._id)
												}
											>
												Delete {reviewBin}
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
