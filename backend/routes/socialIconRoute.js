import express from "express"
import { createSocialicon, getSocialicons, deleteSocialicons, updateSocialicons } from "../controllers/socialiconController.js"
const socialIconRouter = express.Router();

socialIconRouter.post("/", createSocialicon)
socialIconRouter.get("/", getSocialicons)
socialIconRouter.delete("/:id", deleteSocialicons)
socialIconRouter.put("/:id", updateSocialicons)

export default socialIconRouter;