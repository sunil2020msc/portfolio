import express from "express";
import { createProject, getProject, deleteProject, updateProject } from "../controllers/projectController.js"
import multer from "multer";
const projectRouter = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + file.originalname)
    }
})

projectRouter.post("/", multer({ storage: storage }).single('logo'), createProject)
projectRouter.get("/", getProject)
projectRouter.delete("/:id", deleteProject)
projectRouter.put("/:id", multer({ storage: storage }).single('logo'), updateProject)
export default projectRouter;

