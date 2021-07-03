import React from "react";
import styles from "../styles/LoginForm.module.css";

const LoginForm = ({ formdata, setIsNew, isNew }) => {
	const getRenderedContent = () => {
		switch (formdata.type) {
			case "Sign Up":
				return (
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
				);
				break;
			case "Login":
				return (
					<div className="row">
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
				);
				break;
		}
	};

	const handleButton = () => {
		switch (formdata.type) {
			case "Sign Up":
				break;
			case "Login":
				break;
		}
	};
	return (
		<div className={styles.form + " p-5"}>
			<h2>{formdata.formdata.title}</h2>
			<p className={styles.muted}>
				{formdata.formdata.tooltip}{" "}
				<a href="#" onClick={() => setIsNew(!isNew)}>
					{formdata.formdata.link}
				</a>
			</p>
			<form>
				<div className="border-bottom text-center mb-4">
					<a href="/">Github</a>
				</div>
				{getRenderedContent()}
				<button
					className="btn btn-lg btn-block"
					type="submit"
					onClick={() => handleButton()}
				>
					{formdata.formdata.button_text}
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
