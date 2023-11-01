import mongoose from "mongoose";

const skillSchema = mongoose.Schema({
    skill: String,
    rating: String,
    direction: Number,
},
    {
        timestamps: true
    }
)

const Skill = mongoose.model('Skill', skillSchema)

export default Skill;