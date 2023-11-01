import asyncHandler from "express-async-handler"
import Skill from "../models/skillModel.js";
const createSkill = asyncHandler(async (req, res, next) => {
    const fileObj = req.files;

    const data = { ...req.body };
    data.skill = fileObj.skill.map(img => img.path)[0]
    const result = await Skill.create(data)
    res.status(201).json(result);
})

const getSkills = asyncHandler(async (req, res, next) => {
    const results = await Skill.find()
    res.send(results)
})

const deleteSkill = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const results = await Skill.deleteOne({ _id: id })
    res.send(results)
})

export { createSkill, getSkills, deleteSkill }