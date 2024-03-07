"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatController = void 0;
const message_1 = require("../models/message");
class chatController {
    constructor(wss) {
        this.wss = wss;
    }
    handleClients() {
        try {
            this.wss.on('connection', (ws) => __awaiter(this, void 0, void 0, function* () {
                ws.on('message', (message) => __awaiter(this, void 0, void 0, function* () {
                    const parsmessage = JSON.parse(message);
                    console.log(parsmessage);
                    yield message_1.MessageModel.create({ from: parsmessage.from,
                        to: parsmessage.to,
                        message: parsmessage.message
                    });
                }));
            }));
        }
        catch (err) {
            return { "message": err };
        }
    }
}
exports.chatController = chatController;
