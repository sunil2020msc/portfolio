import asyncHandler from "express-async-handler"
import SocialIcon from "../models/socialIconModel.js";
const createSocialicon = asyncHandler(async (req, res, next) => {
    if (!req.body.socialLink) {
        res.status(200).json({ message: "socialLink Required" });
    }
    const result = await SocialIcon.create({ socialLink: req.body.socialLink })
    res.status(201).json({ id: result._id, socialLink: result.socialLink });

})

const getSocialicons = asyncHandler(async (req, res, next) => {
    const results = await SocialIcon.find()
    res.status(200).json(results);
})

const deleteSocialicons = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const results = await SocialIcon.deleteOne({ _id: id });
    res.status(200).json(results);
})

const updateSocialicons = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const socialIcon = await SocialIcon.findOne({ _id: id });
    socialIcon.socialLink = req.body.socialLink
    const results = await socialIcon.save();
    res.status(200).json(results);
})



export { createSocialicon, getSocialicons, deleteSocialicons, updateSocialicons }