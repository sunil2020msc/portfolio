import asyncHandler from "express-async-handler"
import About from "../models/aboutModel.js"
const createAbout = asyncHandler(async (req, res, next) => {

    const data = { heading: req.body.heading, description: req.body.description, fileInput: req.file.path };

    const result = await About.create(data)
    res.status(201).json(result)

})

const getAbout = asyncHandler(async (req, res, next) => {

    const results = await About.find();
    res.status(200).json(results)
})

const deleteAbout = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const results = await About.deleteOne({ _id: id });
    res.status(200).json(results)
})

export { createAbout, getAbout, deleteAbout };