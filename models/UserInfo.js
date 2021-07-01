import mongoose from "mongoose";
const { Schema } = mongoose;

const UserInfoSchema = new Schema({
	languages: {
		type: String,
	},
	likes: {
		type: String,
	},
});

export default mongoose.models.UserInfo ||
	mongoose.model("UserInfo", UserInfoSchema);
