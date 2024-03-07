import express from 'express'
import { userController} from '../controller/user';

const router = express.Router();
const User = new userController()
router
  .post('/register',User.register)
  .post('/login',User.login)
  .get('/',User.getAllUsers)
  .get('/:id',User.getUserById)


export default router;
