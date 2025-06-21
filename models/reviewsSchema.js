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

/*
CREATE INDEX. 
I create index directly in mongoDb.

reviewModel.index({email:1});
review.Model({rating:-1}); look for high index to low.
 */

export default mongoose.model('reviews', reviewModel);