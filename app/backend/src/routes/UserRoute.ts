import * as express from 'express';
import User from '../database/models/UserModel';
import UserService from '../services/User.service';
import UserController from '../controllers/UserController.controller';
import loginVAlidation from '../middlewares/loginValidation';

require('express-async-errors');

const usersRoute = express.Router();

const userController = new UserController(new UserService(User));

usersRoute.post('/', loginVAlidation, (req, res, next) => {
  userController.login(req, res, next);
});

usersRoute.get('/validate', (req, res, next) => {
  UserController.validate(req, res, next);
});

export default usersRoute;
