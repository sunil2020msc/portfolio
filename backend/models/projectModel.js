import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    heading: String,
    description: String,
    logo: String,
    link: String
})

const projectModel = mongoose.model('Project', projectSchema)

export default projectModel;