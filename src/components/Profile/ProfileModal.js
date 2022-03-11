import { useState } from "react";
import "./Profile.css";

export const ProfileModal = ({ closeModal, showmodal, reviews, reviewNum, viewProfile }) => {
	const [text, setText] = useState();
	// const [rating, setRating] = useState("");

	const updateReview = async (e) => {
		try {
            e.preventDefault();
			const response = await fetch(
				`${process.env.REACT_APP_REST_API}review`,
				{
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						_id: reviews[reviewNum]._id,
						text: text,
					}),
				}
			);
			const data = await response.json();
			console.log(data);
			alert("Your review has been updated.");
            setText("");
			closeModal();
            viewProfile();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{showmodal ? (
				<div className="modalbackground">
					<div className="modalwrapper" showmodal={showmodal}>
						<div className="modalcontent">
							<button onClick={closeModal}>Close</button>

							<form onSubmit={updateReview}>
								<label></label>
								<h3>{reviews[reviewNum].name}</h3>
                                <p><span>Rating: {reviews[reviewNum].rating}/10</span></p>
								<p>{reviews[reviewNum].text}</p>
								<textarea
									type="text"
									placeholder="New review"
									maxLength="1000"
									value={text}
									required
									onChange={(e) => setText(e.target.value)}
								/>
								<button type="submit">Update</button>
							</form>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};
