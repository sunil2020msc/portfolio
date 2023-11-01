import mongoose from "mongoose";

const workExpSchema = mongoose.Schema({
    logo: String,
    role: String,
    project: String,
    summary: [],
    tech: [],
},
    {
        timestamps: true
    }
)

const WorkExp = mongoose.model('WorkExp', workExpSchema)

export default WorkExp;