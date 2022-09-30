import { NextFunction, Request, Response } from 'express';
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


export default UserController;
