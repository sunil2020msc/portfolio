import asyncHandler from "express-async-handler"
import Project from "../models/projectModel.js"
const createProject = asyncHandler(async (req, res, next) => {

    const data = { heading: req.body.heading, link: req.body.link, description: req.body.description, logo: req.file.path };

    const result = await Project.create(data)
    res.status(201).json(result)

})

const getProject = asyncHandler(async (req, res, next) => {

    const results = await Project.find();
    res.status(200).json(results)
})

const deleteProject = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const results = await Project.deleteOne({ _id: id });
    res.status(200).json(results)
})

const updateProject = asyncHandler(async (req, res, next) => {
    const id = req.params.id
    const project = await Project.findOne({ _id: id });

    project.logo = req.file ? req.file.path : project.logo;
    project.heading = req.body.heading;
    project.link = req.body.link;
    project.description = req.body.description;
    project.save();
    res.status(200).json(project)
})

export { createProject, getProject, deleteProject, updateProject };