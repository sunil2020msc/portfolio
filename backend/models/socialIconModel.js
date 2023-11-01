import mongoose from "mongoose";

const socialIconSchema = mongoose.Schema({
    socialLink: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

const SocialIcon = mongoose.model('SocialIcon', socialIconSchema)

export default SocialIcon