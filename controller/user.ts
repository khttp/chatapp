import {userModel} from '../models/user'
import { Response,Request } from 'express';

export class userController{

async register(req:Request,res:Response){
  try{ 
    const u = await userModel.findOne({username:req.body.username})
      if (u){
        res.status(400).json('user already exist')
      }
    const User = await userModel.create(req.body) ;
    return res.json(User)
}catch (error) {
  return res.json({"err":error})
}
}

async login (req:Request ,res:Response ){
  const User = await userModel.findOne({username:req.body.username})
  if (!User){
    return res.status(401).json({'message':'wrong username or password'});
  }
  
  return res.status(200).json({'message':'you are loged in'})
}

async getAllUsers(req:Request,res:Response){
    try{
    const users = await userModel.find({})
    if(!users){
        return res.status(401).json({'error':'no users found'})
      }
    res.status(200).json(users)

    }catch (error){
    return res.status(500).json({"Error":error})
  }
}

async getUserById(req:Request,res:Response){
  try{ 
    const user =await userModel.findById(req.params.id);
    if (!user){
      return res.status(401).json({"Error":"user not found"})
      }
    return res.status(200).json(user)
    }catch (error){
    return res.status(500).json({"Error":error})
    }

  }
}
