import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/client";

export default function Home() {
	const [session, loading] = useSession();

	const getRenderedContent = () => {
		return session ? (
			<div>
				Signed in as {session.user.email} <br />
				<button onClick={() => signOut()}>Sign out</button>
			</div>
		) : (
			<div>
				Not signed in <br />
				<button onClick={() => signIn()}>Sign in</button>
			</div>
		);
	};

	return (
		<main className="main">
			<div>{getRenderedContent()}</div>
			<div>{JSON.stringify(session)}</div>
			{/* <footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
				</a>
			</footer> */}
		</main>
	);
}
