import mongoose from "mongoose";

const aboutSchema = mongoose.Schema({
    heading: String,
    description: String,
    fileInput: String
})

const aboutModel = mongoose.model('About', aboutSchema)

export default aboutModel;