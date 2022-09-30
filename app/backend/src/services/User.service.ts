import IJWTToken from '../interfaces/IJWT.interface';
import User from '../database/models/UserModel';
import ILogin from '../interfaces/ILogin.interface';
import generateToken from './helpers/tokenFunctions';

class UserService {
  constructor(private userModel: typeof User) { }

  async login(userLogin: ILogin): Promise<IJWTToken> {
    const user = await this.userModel.findOne(
      { where: { email: userLogin.email } },
    );
    if (!user) throw new Error('invalidLoginUser');
    const token = generateToken(user.id, user.username, user.role);

    return token;
  }
}

export default UserService;
