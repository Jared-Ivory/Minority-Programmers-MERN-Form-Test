import axios from "axios";
import Providers from "next-auth/providers";

const MongoDBProvider = Providers.Credentials({
	name: "MongoDB Provider",
	credentials: {
		email: { label: "Email", type: "text", placeholder: "example@email.com" },
		password: { label: "Password", type: "password" },
	},
	async authorize(credentials) {
		axios
			.post("http://localhost:3000/api/users", credentials)
			.then(({ data }) => {
				if (data.email === credentials.email) {
					return data;
				}
			});
	},
});

export default MongoDBProvider;
