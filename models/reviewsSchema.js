import mongoose from "mongoose";


const reviewModel = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
    }

});

export default mongoose.model('reviews', reviewModel);