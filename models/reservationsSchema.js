import mongoose from "mongoose";

const reservationModel = mongoose.Schema({
 firstName:  {
    type:String,
    required:true,
 },
 lastName:  {
    type:String,
    required:true,
    lowercase:true,

 },
 date: {
    type: Date,
    required:true,
    default: Date.now()
 },
 time: String,
  email: {
    type:String,
    required:true,
    lowercase:true,

 }, 
 phone: Number,
 people: Number,
});


export default mongoose.model('reservations', reservationModel);