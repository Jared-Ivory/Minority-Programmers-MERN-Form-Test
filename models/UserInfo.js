import mongoose from "mongoose";
const { Schema } = mongoose;

const UserInfoSchema = new Schema({
	fullname: {
		type: String,
		required: true,
	},
	languages: {
		type: Array,
	},
	likes: {
		type: Array,
	},
});

export default mongoose.models.UserInfo ||
	mongoose.model("UserInfo", UserInfoSchema);
