import asyncHandler from "express-async-handler"
import WorkExp from "../models/workExpModel.js";
const createWorkExp = asyncHandler(async (req, res, next) => {
    const fileObj = req.files;

    const data = { ...req.body };
    data.summary = JSON.parse(data.summary)
    data.logo = fileObj.logo.map(img => img.path)[0]
    data.tech = fileObj.tech.map(img => img.path)
    const result = await WorkExp.create(data)
    res.status(201).json(result);
})

const getWorkExp = asyncHandler(async (req, res, next) => {
    const results = await WorkExp.find()
    res.send(results)
})

const deleteWorkExp = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const results = await WorkExp.deleteOne({ _id: id })
    res.send(results)
})

export { createWorkExp, getWorkExp, deleteWorkExp }