import { useEffect, useState } from "react";

export const Profile = ({ user }) => {
	const [ reviews, setReview] = useState([]);

	useEffect(() => {
		viewReviews();
	},[]);

	const viewReviews = async () => {
		try {
			const response = await fetch(`${process.env.REACT_APP_REST_API}findUser`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json"},
				body: JSON.stringify({
					username: user.user.username
				})
			})
		
		const reviewData = await response.json();
		console.log("error2")
		console.log(reviewData.reviews)
		setReview(reviewData.reviews)
		} catch (error) {
			console.log(error);
		}
	}


	return (
		<div>
			<h1>Profile</h1>
			<h2>{user ? user.user.username : "Not logged in"}</h2>
			<button onClick={viewReviews}></button>
			<h2>User Reviews</h2>
			{reviews.map((review) => (
				<div key={review._id}>
					<p>{review.text}</p>
					<p>Rating: {review.rating} out of 10</p>
				</div>
			))}
		</div>
	);
};
