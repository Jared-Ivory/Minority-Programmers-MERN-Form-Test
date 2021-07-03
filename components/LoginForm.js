import React, { useState, useEffect } from "react";
import { getProviders, signIn } from "next-auth/client";
import styles from "../styles/LoginForm.module.css";

const LoginForm = ({ formdata, setIsSigningUp, isSigningUp }) => {
	const [providers, setProviders] = useState([]);
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(async () => {
		const providers = await getProviders();
		setProviders(providers);
		console.log(providers);
	}, []);

	const getRenderedContent = () => {
		return (
			<div className="row">
				{formdata.type === "Sign Up" && (
					<div className="row">
						<div className="form-label-group">
							<label htmlFor="inputName">Full name</label>
							<input
								id="inputName"
								className="form-control"
								placeholder="Full name"
								required=""
								autoFocus=""
								value={fullname}
								onChange={(e) => setFullname(e.target.value)}
							/>
						</div>
					</div>
				)}
				<div className="form-label-group">
					<label htmlFor="inputEmail">Email address</label>
					<input
						type="email"
						id="inputEmail"
						className="form-control"
						placeholder="Email address"
						required={true}
						autoFocus=""
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="form-label-group">
					<label htmlFor="inputPassword">Password</label>
					<input
						type="password"
						id="inputPassword"
						className="form-control"
						placeholder="Password"
						required={true}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
			</div>
		);
	};

	const handleButton = () => {
		switch (formdata.type) {
			case "Sign Up":
				break;
			case "Login":
				break;
		}
	};

	const handleGitHub = () => {};
	return (
		<div className={styles.form + " p-5"}>
			<h2>{formdata.formdata.title}</h2>
			<p className={styles.muted}>
				{formdata.formdata.tooltip}{" "}
				<a href="#" onClick={() => setIsSigningUp(!isSigningUp)}>
					{formdata.formdata.link}
				</a>
			</p>
			<form>
				<div className="border-bottom text-center mb-4">
					<>
						{Object.values(providers).map((provider) => (
							<div key={provider.name}>
								<button onClick={() => signIn(provider.id)}>
									Sign in with {provider.name}
								</button>
							</div>
						))}
					</>
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
