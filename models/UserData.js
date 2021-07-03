import mongoose from "mongoose";
const { Schema } = mongoose;

const UserDataSchema = new Schema({
	email: {
		type: String,
		required: true,
	},
	fullname: {
		type: String,
	},
	languages: {
		type: Array,
	},
	likes: {
		type: Array,
	},
});

export default mongoose.models.UserData ||
	mongoose.model("UserData", UserDataSchema);
