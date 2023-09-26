import mongoose from "mongoose";

const RoomScheme = new mongoose.Schema({
	code: { type: String, required: true },
	name: { type: String, required: true },
	userList: { type: Array, required: true }
});

export default mongoose.models.RoomScheme || mongoose.model("rooms", RoomScheme);
