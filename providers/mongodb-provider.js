import Adapters from "next-auth/adapters";
import Providers from "next-auth/providers";
import dbConnect from "../utils/dbConnect";

const MongoDBProvider = Providers.Credentials({
	name: "MongoDB Provider",
	credentials: {
		email: { label: "Email", type: "text", placeholder: "example@email.com" },
		password: { label: "Password", type: "password" },
	},
	async authorize(credentials) {
		const db = await dbConnect(); // retrieve db instance

		db.collection("users", (err, usersCollection) =>
			// on retrieval of the users collection run any desired query methods to the collection
			usersCollection.find({}).toArray((err, users) => {
				// respond with users as json
				const user = users.find({ email: credentials.email });
				console.log(user);
			})
		);
	},
});

export default MongoDBProvider;
