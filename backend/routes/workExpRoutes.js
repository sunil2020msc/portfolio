import express from "express";
import { createWorkExp, getWorkExp, deleteWorkExp } from "../controllers/workExpController.js"
import multer from "multer"

const workExpRouter = express.Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + file.originalname)
    }
})

workExpRouter.post("/", multer({ storage: storage }).fields([{ name: 'logo', maxCount: 8 }, { name: 'tech', maxCount: 8 }]), createWorkExp);

workExpRouter.get("/", getWorkExp)
workExpRouter.delete("/:id", deleteWorkExp)

export default workExpRouter