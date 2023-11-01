import mongoose from "mongoose";

const conectDB = async () => {
    try {
        const res = await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to mongoDB")
    }
    catch (e) {
        console.log("error", e)
    }
}

export default conectDB;