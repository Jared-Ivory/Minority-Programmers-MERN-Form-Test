import dbConnect from "../../../utils/dbConnect";
import UserData from "../../../models/UserData";

export default async (req, res) => {
	const db = await dbConnect();
	const { id } = req.query;
	switch (req.method) {
		case "GET":
			console.log(id);
			res.status(200).json({ id });
			break;
		case "PUT":
			const userData = UserData({
				fullname: "Jared Ivory",

				languages: [],
				likes: [],
			});
			userData.save((err, userData) => {
				if (err) return console.err(err);
			});
			res.status(200).json(JSON.stringify(userData));
			break;
	}
};
