// SIGNUP PAGE
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

// LOGIN PAGE
export const fetchLogin = async (setUser, username, password) => {
	try {
		const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
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

export const fetchShops = async (setShops) => {
	try {
		const response = await fetch(`${process.env.REACT_APP_REST_API}shop`, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		});
		const data = await response.json();
		console.log(data.shops);
		setShops(data.shops);
	} catch (error) {
		console.log(error);
	}
};

// SHOP DETAILS PAGE: Fetch shop info
export const fetchShop = async (shops, shopNum, setShop, setReviews) => {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_REST_API}shop/details`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: shops[shopNum].name,
				}),
			}
		);
		const data = await response.json();
		console.log(data.shop);
		console.log(data.shop.reviews);
		setShop(data.shop);
		setReviews(data.shop.reviews);
	} catch (error) {
		console.log(error);
	}
};