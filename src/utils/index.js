export const fetchSignup = async (setUser, email, username, password) => {
	try {
		const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email: email,
				username: username,
				password: password,
			}),
		});
		const data = await response.json();
		console.log(data);
		setUser(data);
	} catch (error) {
		console.log(error);
	}
};
