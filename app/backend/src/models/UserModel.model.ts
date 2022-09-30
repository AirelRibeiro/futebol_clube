import User from '../database/models/UserModel';
import AbstractModel from './AbstractModel.model';

class UserModel extends AbstractModel<User> {}

export default UserModel;
