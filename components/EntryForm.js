import React from "react";
import { Form } from ".";
import styles from "../styles/EntryForm.module.css";

import Logo from "../assets/svg/mp_asset_icon.svg";
const EntryForm = () => {
	return (
		<div className="container shadow bg-white rounded p-0 overflow-hidden w-75">
			<div className={styles.entry}>
				<div className="row g-0">
					<div className="col-sm">
						<div className={styles.left}>
							<Logo className={styles.logo} />
							<div className={styles.content}>
								<div className="text-center">
									<h1 className="mb-3 bold">Register for MPA</h1>
									<p>
										To keep connecting with us please register with your
										personal info.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm">
						<Form />
					</div>
				</div>
			</div>
		</div>
	);
};

export default EntryForm;
