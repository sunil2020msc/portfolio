import Contact from "../models/contactModel.js";
import asyncHandler from "express-async-handler"
const createContact = asyncHandler(async (req, res, next) => {

    const result = await Contact.create(req.body)
    res.status(201).json(result);
})

const getContacts = asyncHandler(async (req, res, next) => {

    const results = await Contact.find()
    res.status(201).json(results);
})


export { createContact, getContacts }