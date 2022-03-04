import { useEffect, useState } from "react";

export default function ShopReview({ shops, shopNum, user }) {
	// const [username, setUsername] = useState("");
	const [text, setText] = useState("");
	// const [coffeeshopname, setCoffeeShopName] = useState("");
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
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<h2>Add a review</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Already visited this shop? Share your thoughts and write
					your review below.
				</label>
				<input
					type="text"
					placeholder="About it"
					value={text}
					required
					onChange={(e) => setText(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Rating"
					value={rating}
					required
					onChange={(e) => setRating(e.target.value)}
				/>
				<button>ADD</button>
			</form>
		</div>
	);
}
