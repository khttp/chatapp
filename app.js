"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user"));
const dotenv_1 = __importDefault(require("dotenv"));
const chat_1 = require("./controller/chat");
const ws_1 = require("ws");
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = require("body-parser");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
mongoose_1.default.connect(`${process.env.DB_CONN}`, { dbName: 'chat-app' }).then(_ => {
    console.log('connected to a database');
}).catch(err => {
    console.error(err);
});
app.use('/users', user_1.default);
const server = app.listen(process.env.PORT, () => {
    console.log(`server is running on prot ${process.env.PORT}`);
});
const sockeserver = new ws_1.WebSocketServer({ server });
const chat = new chat_1.chatController(sockeserver);
chat.handleClients();
