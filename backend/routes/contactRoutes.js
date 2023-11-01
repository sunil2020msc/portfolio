import express from "express"
import { createContact, getContacts } from "../controllers/contactController.js";
const contactRouter = express.Router();

contactRouter.post("/", createContact)
contactRouter.get("/", getContacts)

export default contactRouter;