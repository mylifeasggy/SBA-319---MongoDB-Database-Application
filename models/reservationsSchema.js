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
  email: {
    type:String,
    required:true,
    lowercase:true,
    unique:true,
 }, 
 phone: {
   type:Number,
   unique:true,
 },
 people: Number,
});


export default mongoose.model('reservations', reservationModel);


