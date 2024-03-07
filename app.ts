import express from 'express' 
import router from './routes/user'
import dotenv from 'dotenv'
import {chatController } from './controller/chat'
import {WebSocketServer} from 'ws'
import mongoose from 'mongoose'
import { json } from 'body-parser'
dotenv.config()
const app = express ();
app.use(json())

mongoose.connect(
  `${process.env.DB_CONN}`,
  {dbName:'chat-app'}
).then( _=>{
    console.log('connected to a database')
  }
).catch(
    err=>{
      console.error(err)
    }
  )
app.use('/users',router);
const server =app.listen(process.env.PORT,()=>
  {
    console.log(`server is running on prot ${process.env.PORT}`)}
)
const sockeserver= new WebSocketServer({server})
const chat = new chatController(sockeserver);
chat.handleClients()
