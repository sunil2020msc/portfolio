import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import generateToken from "../utils/generateToken.js"

const login = asyncHandler(async (req, res, next) => {

    const user = await User.findOne({ email: req.body.email });
    const passwordsMatch = await (user.matchPasswords(req.body.password))
    if (user && passwordsMatch) {
        generateToken(res, user._id);
        const newUser = { id: user._id, name: user.name, email: user.email }
        res.status(200).json(newUser)
    }
    else {
        res.status(401);
        throw new Error("Invalid username or password")
    }

})

const register = asyncHandler(async (req, res, next) => {
    const user = { name: req.body.name, email: req.body.email, password: req.body.password }
    const result = await User.create(user);
    const newUser = { id: result._id, name: result.name, email: result.email }
    generateToken(res, result._id);
    res.status(201).json({ newUser })
})

const profile = asyncHandler(async (req, res, next) => {
    res.status(200).json(req.user);
})


export { login, register, profile }