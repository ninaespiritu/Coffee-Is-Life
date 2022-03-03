import "./Signup.css";

export const Signup = ({ props }) => {
	return (
		<div className="signup">
			<h1>Create an account</h1>
			<p>Join our community of coffee lovers and enthusiasts.</p>
			<p>Sign up for Coffee Is Life today &mdash; <span>it's free!</span></p>
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
				<button type="submit">Sign Up &#8594;</button>
			</form>
		</div>
	);
};
