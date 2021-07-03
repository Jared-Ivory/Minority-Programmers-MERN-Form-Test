import { EntryForm } from ".";
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/client";

import styles from "../styles/Home.module.css";

const Home = () => {
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
			<button onClick={() => signIn()}>Sign In</button>
			<div className={styles.home}>{getRenderedContent()}</div>
		</div>
	);
};

export default Home;
