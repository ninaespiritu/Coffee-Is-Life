import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ShopDetails = () => {
	const [shop, setShop] = useState({});
	const { name } = useParams();

	useEffect(() => {
		fetchShop();
	}, []);

	const fetchShop = async () => {
		try {
			const response = await fetch(
				`${process.env.REACT_APP_REST_API}shop/details`,
				{
					method: "POST",
					mode: "no-cors",
					headers: { "Content-Type": "application/json" },
					body: {
						name,
					},
				}
			);
			console.log(name);
			const data = await response.json();
			console.log(data.shop);
			setShop(data.shop);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<h3>Shop Details</h3>
			<h1>{shop.name}</h1>
		</div>
	);
};
