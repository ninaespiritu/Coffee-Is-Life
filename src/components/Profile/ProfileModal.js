import { useState } from "react";
import "./Profile.css";

export const ProfileModal = ({ closeModal, showmodal, reviews, reviewNum, viewProfile }) => {
	const [text, setText] = useState();
	const [rating, setRating] = useState();

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
			alert(`Your review for ${reviews[reviewNum].name} has been updated.`);
            setText("");
			closeModal();
            viewProfile();
		} catch (error) {
			console.log(error);
		}
	};

    const updateRating = async (e) => {
		try {
            e.preventDefault();
			const response = await fetch(
				`${process.env.REACT_APP_REST_API}rating`,
				{
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						_id: reviews[reviewNum]._id,
						rating: rating,
					}),
				}
			);
			const data = await response.json();
			console.log(data);
			alert(`Your rating for ${reviews[reviewNum].name} has been updated.`);
            setRating("");
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
                            
                            <h3>{reviews[reviewNum].name}</h3>

							<form onSubmit={updateRating}>	
                                <p>
                                    <span>
                                        Rating: {reviews[reviewNum].rating}/10
                                    </span>
                                </p>
								<input
                                    type="number"
                                    placeholder="New rating (1 - 10)"
                                    min="1"
                                    max="10"
                                    required
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                />
                                <button type="submit">Update Rating</button>
							</form>

                            <form onSubmit={updateReview}>
                                <p>{reviews[reviewNum].text}</p>
								<textarea
									type="text"
									placeholder="New review"
									maxLength="1000"
                                    required
									value={text}
									onChange={(e) => setText(e.target.value)}
								/>
								<button type="submit">Update Review</button>
							</form>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};
