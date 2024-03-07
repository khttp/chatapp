"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../controller/user");
const router = express_1.default.Router();
const User = new user_1.userController();
router
    .post('/register', User.register)
    .post('/login', User.login)
    .get('/', User.getAllUsers)
    .get('/:id', User.getUserById);
exports.default = router;
