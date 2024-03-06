import express from 'express' 
import dotenv from 'dotenv'
import { WebSocket } from 'ws'
dotenv.config()
const app = express ();

app.listen(process.env.PORT,()=>
  {
    console.log(`server is running on prot ${process.env.PORT}`)}
)
