import express from "express"
import { createTypos, getTypos, deleteTypo, getTyposList, updateTypo } from "../controllers/typoController.js";
const typoRouter = express.Router();

typoRouter.post("/", createTypos)
typoRouter.get("/", getTypos)
typoRouter.get("/list", getTyposList)
typoRouter.delete("/:id", deleteTypo)
typoRouter.put("/:id", updateTypo)

export default typoRouter;