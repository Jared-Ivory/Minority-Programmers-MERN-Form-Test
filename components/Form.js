import React from "react";
import styles from "../styles/Form.module.css";

const Form = () => {
	return (
		<div className={styles.form + " p-5"}>
			<h2>Sign Up</h2>
			<p className={styles.muted}>
				Already have an account? <a href="/">Login</a>
			</p>
			<form>
				<div className="border-bottom text-center mb-4">
					<a href="/">Github</a>
				</div>
				<div className="row">
					<div className="form-label-group">
						<label htmlFor="inputName">Full name</label>
						<input
							id="inputName"
							className="form-control"
							placeholder="Full name"
							required=""
							autoFocus=""
						/>
					</div>
					<div className="form-label-group">
						<label htmlFor="inputEmail">Email address</label>
						<input
							type="email"
							id="inputEmail"
							className="form-control"
							placeholder="Email address"
							required=""
							autoFocus=""
						/>
					</div>

					<div className="form-label-group">
						<label htmlFor="inputPassword">Password</label>
						<input
							type="password"
							id="inputPassword"
							className="form-control"
							placeholder="Password"
							required=""
						/>
					</div>
				</div>
				<button className="btn btn-lg btn-block" type="submit">
					Register
				</button>
			</form>
		</div>
	);
};

export default Form;