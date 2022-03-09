import { useState } from "react";
import "./ShopDetails.css";

export default function ShopReview({ shops, shopNum, user, fetchReview }) {
	const [text, setText] = useState("");
	const [rating, setRating] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(
				`${process.env.REACT_APP_REST_API}review`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						username: user.user.username,
						name: shops[shopNum].name,
						text: text,
						rating: rating,
					}),
				}
			);
			const data = await response.json();
			console.log(data);
			setText("");
			setRating("");
			fetchReview();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="add-review-box">
			<h2>Add a review</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Already visited this shop? Share your thoughts and write
					your review below.*
				</label>
				<textarea
					type="text"
					placeholder="Your review"
					maxlength="1000"
					value={text}
					required
					onChange={(e) => setText(e.target.value)}
				/>
				<input
					type="number"
					placeholder="Your rating (1 - 10)"
					min="1"
					max="10"
					value={rating}
					required
					onChange={(e) => setRating(e.target.value)}
				/>
				<button>ADD</button>
			</form>
		</div>
	);
}
