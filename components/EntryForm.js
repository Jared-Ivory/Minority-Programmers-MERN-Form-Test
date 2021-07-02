import React from "react";
import styles from "../styles/EntryForm.module.css";

const jumbo = (
	<div className="jumbotron">
		<h1 className="display-4">Hello, world!</h1>
		<p className="lead">
			This is a simple hero unit, a simple jumbotron-style component for calling
			extra attention to featured content or information.
		</p>
		<hr className="my-4" />
		<p>
			It uses utility classes for typography and spacing to space content out
			within the larger container.
		</p>
		<p className="lead">
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Learn more
			</a>
		</p>
	</div>
);

const EntryForm = () => {
	return (
		<div className={styles.entry}>
			<div className="container g-0 form-container align-items-center">
				<div className="row g-0">
					<div className="col-sm">
						<div className={styles.left}></div>
					</div>
					<div className="col-sm">
						<div className={styles.right}></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EntryForm;
