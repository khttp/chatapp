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
exports.userController = void 0;
const user_1 = require("../models/user");
class userController {
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const u = yield user_1.userModel.findOne({ username: req.body.username });
                if (u) {
                    res.status(400).json('user already exist');
                }
                const User = yield user_1.userModel.create(req.body);
                return res.json(User);
            }
            catch (error) {
                return res.json({ "err": error });
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const User = yield user_1.userModel.findOne({ username: req.body.username });
            if (!User) {
                return res.status(401).json({ 'message': 'wrong username or password' });
            }
            return res.status(200).json({ 'message': 'you are loged in' });
        });
    }
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield user_1.userModel.find({});
                if (!users) {
                    return res.status(401).json({ 'error': 'no users found' });
                }
                res.status(200).json(users);
            }
            catch (error) {
                return res.status(500).json({ "Error": error });
            }
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_1.userModel.findById(req.params.id);
                if (!user) {
                    return res.status(401).json({ "Error": "user not found" });
                }
                return res.status(200).json(user);
            }
            catch (error) {
                return res.status(500).json({ "Error": error });
            }
        });
    }
}
exports.userController = userController;
