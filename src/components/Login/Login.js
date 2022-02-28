export const Login = ({ props }) => {
	return (
		<div>
			<h2>Log In</h2>
			<form onSubmit={props.handleLogin}>
				<input
					onChange={(e) => props.setUsername(e.target.value)}
					placeholder="Username"
				/>
				<input
					onChange={(e) => props.setPassword(e.target.value)}
					placeholder="Password"
				/>
				<button type="submit">Log In</button>
			</form>
		</div>
	);
};
