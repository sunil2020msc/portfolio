import asyncHandler from "express-async-handler"
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
const protect = asyncHandler(async (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const userId = decoded.userId;
        const user = await User.findById(userId).select("-password")
        if (!user) {
            throw new Error("Not authorized user");
        }
        req.user = user
        next();
    }
    else {
        throw new Error("Not authorized no token");
    }

})

export default protect;