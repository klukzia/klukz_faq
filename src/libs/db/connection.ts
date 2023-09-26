import mongoose from "mongoose";

const connectMongo = async () => mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI as string);

export default connectMongo;
