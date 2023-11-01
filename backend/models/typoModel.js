import mongoose from "mongoose";

const typoSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }

)

const Typo = mongoose.model('Typo', typoSchema)

export default Typo