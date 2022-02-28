export const Signup = ({ props }) => {
	return (
		<div>
			<h2>Sign Up</h2>
			<form onSubmit={props.handleSignup}>
				<input
					onChange={(e) => props.setEmail(e.target.value)}
					placeholder="Email"
				/>
				<input
					onChange={(e) => props.setUsername(e.target.value)}
					placeholder="Username"
				/>
				<input
					onChange={(e) => props.setPassword(e.target.value)}
					placeholder="Password"
				/>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};
