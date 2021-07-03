import dbConnect from "../../../utils/dbConnect";

export default async (req, res) => {
	const db = await dbConnect();

	const data = await db.collection("users").find({}).toArray();

	res.json(data);
};
