import express from "express";
import { createSkill, getSkills, deleteSkill } from "../controllers/skillController.js"
import multer from "multer"

const skillRouter = express.Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + file.originalname)
    }
})

skillRouter.post("/", multer({ storage: storage }).fields([{ name: 'skill', maxCount: 15 }, { name: 'tech', maxCount: 8 }]), createSkill);

skillRouter.get("/", getSkills)
skillRouter.delete("/:id", deleteSkill)

export default skillRouter