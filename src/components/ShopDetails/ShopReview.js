import { useEffect, useState } from "react";

export default function ShopReview() {
    const [username, setUsername] = useState("");
	const [text, setText] = useState("");
	const [coffeeshopname, setCoffeeShopName] = useState("");
	const [rating, setRating] = useState("");

    const handleSubmit = async (e) => {
		e.preventDefault();
		try {
            const response = await fetch(`${process.env.REACT_APP_REST_API}review`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: username,
                    name: coffeeshopname,
                    text: text,
                    rating: rating
                }),
            });
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.log(error)
		}
	};

  return (
    <div>
    <h2>Reviews</h2>
        <form onSubmit={handleSubmit}>
            <label>Add Review:</label>
            <input type="text" placeholder="Coffee Shop Name" value={coffeeshopname} required onChange={(e) => setCoffeeShopName(e.target.value)} />
            <input type="text" placeholder="Your Name" value={username} required onChange={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder="About it" value={text} required onChange={(e) => setText(e.target.value)} />
            <input type="text" placeholder="Rating" value={rating} required onChange={(e) => setRating(e.target.value)} />
            <button>ADD</button>
    </form>
    </div>
  )
}
