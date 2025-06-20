import mongoose from "mongoose";

const menuModel = mongoose.Schema({
    plate_name: String,
    plate_description: String,
    serving_size: Number,
    price: {
        type: Number,
        required: true
    },
    vegan: Boolean
});

export default mongoose.model('menu', menuModel)