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
 time:{
   type: String,
    required:true,
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

/*
CREATE INDEXES 

reservationModel.index({ date: 1, time: 1 });
reservationsModel.index({email: 1});


*/


export default mongoose.model('reservations', reservationModel);


