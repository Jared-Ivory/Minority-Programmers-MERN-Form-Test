import React, { useState, useEffect } from "react";
import { LoginForm } from ".";

import styles from "../styles/EntryForm.module.css";
import Logo from "../assets/svg/mp_asset_icon.svg";

import FormData from "../constants";

const EntryForm = () => {
	const [isNew, setIsNew] = useState(true);
	const [formdata, setFormData] = useState(FormData.SignUpForm);
	useEffect(() => {
		switch (isNew) {
			case true:
				setFormData(FormData.SignUpForm);
				break;
			case false:
				setFormData(FormData.LoginForm);
				break;
		}
	}),
		[isNew];
	return (
		<div className="container shadow bg-white rounded p-0 overflow-hidden w-75">
			<div className={styles.entry}>
				<div className="row g-0">
					<div className="col-sm">
						<div className={styles.left}>
							<Logo className={styles.logo} />
							<div className={styles.content}>
								<div className="text-center">
									<h1 className="mb-3 bold">{formdata.banner.title}</h1>
									<p>{formdata.banner.content}</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm">
						<LoginForm formdata={formdata} isNew={isNew} setIsNew={setIsNew} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default EntryForm;
