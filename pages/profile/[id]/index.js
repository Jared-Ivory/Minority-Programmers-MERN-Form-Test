import React from "react";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/client";

const ProfilePage = () => {
	const [session, loading] = useSession();
	const router = useRouter();

	const handleSignOut = () => {
		signOut();
		if (session) {
			signOut();
		}
		router.push("/");
	};

	const goHome = () => {
		router.push("/");
	};

	const isSignedIn = () => {
		console.log(session);
		if (session) {
			return (
				<div>
					Signed in as {session.user.email} <br />
				</div>
			);
		}
		return <div></div>;
	};

	return (
		<div>
			{isSignedIn()}
			<div>
				<button onClick={() => handleSignOut()}>Sign out</button>
				<button onClick={() => goHome()}>Go Home</button>
			</div>
		</div>
	);
};

export default ProfilePage;
