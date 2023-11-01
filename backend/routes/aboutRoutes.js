import express from "express";
import { createAbout, getAbout, deleteAbout } from "../controllers/aboutController.js"
import multer from "multer";
const aboutRouter = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + file.originalname)
    }
})

aboutRouter.post("/", multer({ storage: storage }).single('fileInput'), createAbout)
aboutRouter.get("/", getAbout)
aboutRouter.delete("/:id", deleteAbout)
// aboutRouter.post("/", multer({ dest: "uploads" }).single('fileInput'), createAbout)
// aboutRouter.post("/", createAbout)
export default aboutRouter;

