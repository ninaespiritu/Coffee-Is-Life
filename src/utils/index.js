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
		localStorage.setItem("myToken", data.token)
	} catch (error) {
	  console.log(error);
	  

	}
};

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
		localStorage.setItem("myToken", data.token)
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
		localStorage.setItem("myToken", data.token)
	} catch (error) {
		console.log(error);
	}
};

export const tokenFetch = async (setUser) => {
	try {
		const token = localStorage.getItem("myToken");
		const response = await fetch(`http://localhost:5001/token`, { 
			method: "GET", 
			headers: { "Authorization": `Bearer ${token}`}
		});
		const data = await response.json();
		setUser(data.user);
	} catch (error) {
		console.error(error);
	}
}
