import dbConnect from "../../../utils/dbConnect";

export default async (req, res) => {
	const db = await dbConnect();

	switch (req.method) {
		case "GET":
			db.collection("users", (err, usersCollection) =>
				// on retrieval of the users collection run any desired query methods to the collection
				usersCollection.find({}).toArray((err, users) => {
					// respond with users as json
					res.status(200).json(users);
				})
			);
			break;
		case "POST":
			const creds = req.body;
			db.collection("users", async (err, usersCollection) => {
				if (err) {
					res.status(400).json(err);
				} else {
					const user = await usersCollection.findOne({ email: creds.email });
					res.status(200).json(user);
				}
			});
			break;
	}
};
