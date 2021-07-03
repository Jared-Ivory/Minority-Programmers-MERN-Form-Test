import { EntryForm } from ".";
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/client";

import styles from "../styles/Home.module.css";

const Home = () => {
	const [session, loading] = useSession();
	const router = useRouter();

	const beginSignInFlow = () => {
		setTimeout(() => {
			router.push(`/auth/signin`);
		}, 3000);
	};
	if (loading) {
		return <div>Loading...</div>;
	}

	session ? router.push(`/profile/${session.user.name}`) : beginSignInFlow();
	return (
		<div>
			<div className={styles.home}>
				<div className="jumbotron jumbotron-fluid text-white">
					<div className="container">
						<h1 className="display-4">Home</h1>
						<p className="lead">This is a temporary page...</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
