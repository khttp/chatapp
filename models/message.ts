import mongoose, { Mongoose, mongo } from "mongoose";

const MessageSchema = new mongoose.Schema({
  from : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
    required:true
  },
  to : {
    type : mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required :true
  },
  message:{
    type:String,
    required:true
  },
  timestamp : {
    type :Date ,
    default : Date.now()
  }
  }
);
export const MessageModel = mongoose.model('Message',MessageSchema);
