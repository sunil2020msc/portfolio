import Typo from "../models/typoModel.js";
import asyncHandler from "express-async-handler"
const createTypos = asyncHandler(async (req, res, next) => {
    if (!req.body.text) {
        res.status(200).json({ message: "Text required" });
    }
    const result = await Typo.create({ text: req.body.text })
    res.status(201).json(result);
})

const getTypos = asyncHandler(async (req, res, next) => {

    const results = await Typo.find()
    res.status(201).json(results);
})

const getTyposList = asyncHandler(async (req, res, next) => {
    const results = await Typo.find().select({ text: 1, _id: 0 })

    const typoList = results.map(typo => typo.text)

    res.status(201).json(typoList);
})

const deleteTypo = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const results = await Typo.deleteOne({ _id: id });
    res.status(200).json(results);
})

const updateTypo = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const typo = await Typo.findOne({ _id: id });
    typo.text = req.body.text
    const result = await typo.save();

    res.status(200).json(result)
})

export { createTypos, getTypos, deleteTypo, getTyposList, updateTypo }