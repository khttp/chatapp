import { WebSocketServer,WebSocket } from "ws";
import { MessageModel } from "../models/message";
import { userModel } from "../models/user";

export class chatController {
  
  private wss:WebSocketServer

  constructor(wss:WebSocketServer){
    this.wss = wss
  }
      
  handleClients(){
   try{
    this.wss.on('connection',async (ws:WebSocket)=>{
      
       ws.on('message',async(message:string)=>{
        const parsmessage = JSON.parse(message);
        console.log(parsmessage)
        await MessageModel.create(
            {from:parsmessage.from,
              to:parsmessage.to,
              message:parsmessage.message
            }
          );
        ws.send(parsmessage)

      })

    })
    }catch (err){
      return {"message":err}
    }

  }

}
