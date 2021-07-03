import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import MongoDBProvider from "../../../providers/mongodb-provider";
import Adapters from "next-auth/adapters";

import User, { UserSchema } from "../../../models/User";

export default NextAuth({
	providers: [
		Providers.GitHub({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
			scope: "user",
		}),
		MongoDBProvider,
	],
	adapter: Adapters.TypeORM.Adapter(process.env.MONGODB_URI, {
		models: {
			User: { model: User, schema: UserSchema },
		},
	}),
	session: {
		jwt: true,
	},
	callbacks: {
		async signIn(profile, account, metadata) {
			// https://developer.github.com/v3/users/emails/#list-email-addresses-for-the-authenticated-user
			const res = await fetch("https://api.github.com/user/emails", {
				headers: {
					Authorization: `token ${account.accessToken}`,
				},
			});
			const emails = await res.json();
			if (!emails || emails.length === 0) {
				return;
			}
			const primaryEmail = emails.find((email) => email.primary === true);
			primaryEmail ? (profile.email = primaryEmail.email) : console.log(emails);
		},
	},
	pages: {
		error: "/auth/error",
		signIn: "/auth/signin",
	},
	database: `${process.env.MONGODB_URI}`,
});
