import { NextFunction, Request, Response } from 'express';
import { recoverUser } from '../services/helpers/tokenFunctions';
import ILogin from '../interfaces/ILogin.interface';
import UserService from '../services/User.service';

class UserController {
  constructor(private userService: UserService) {}

  async login(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const token = await this.userService.login(req.body as ILogin);
      return res.status(200).json(token);
    } catch (err) {
      next(err);
    }
  }

  static async validate(req: Request, res: Response, _next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) throw new Error('Mensagem de erro');
    const user = recoverUser(authorization);
    const { role } = user.data;
    res.status(200).json({ role });
  }
}

export default UserController;
