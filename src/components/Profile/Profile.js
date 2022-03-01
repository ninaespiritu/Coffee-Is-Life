export const Profile = ({ user }) => {
	return (
		<div>
			<h1>Profile</h1>
			<h2>{user ? user.user.username : "Not logged in"}</h2>
		</div>
	);
};
