import React from "react";
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/client";

import { EntryForm } from ".";
import styles from "../styles/SignIn.module.css";

const SignIn = () => {
	const [session, loading] = useSession();
	const router = useRouter();

	const getRenderedContent = () => {
		if (session) {
			router.push(`/profile/${session.user.name}`);
		}
		return <EntryForm />;
	};

	if (loading) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<div className={styles.signin}>{getRenderedContent()}</div>
		</div>
	);
};
export default SignIn;
