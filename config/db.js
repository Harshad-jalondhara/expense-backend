import mongoose from "mongoose";

export const ConnectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB Connect");
    } catch (error) {
        console.log("MongoDB Conneting Error : ", error);
        process.exit(1);
    }
}