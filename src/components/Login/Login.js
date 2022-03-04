import "./Login.css";

export const Login = ({ props }) => {
	return (
		<div className="login">
			<h1>Log In</h1>
			<p>Already have an account? <span>Sign back in!</span></p>
			<form onSubmit={props.handleLogin}>
				<input
					onChange={(e) => props.setUsername(e.target.value)}
					placeholder="Username"
				/>
				<input
					onChange={(e) => props.setPassword(e.target.value)}
					placeholder="Password"
					type="password"
				/>
				<button type="submit">Log In &#8594;</button>
			</form>
		</div>
	);
};
