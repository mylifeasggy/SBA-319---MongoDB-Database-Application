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



/*  CREATE INDEXES  

menuModel.index({plate_name: text });
menuModel.index({price: 1 });
menuModel.index({vegan: 1})


*/

export default mongoose.model('menu', menuModel)