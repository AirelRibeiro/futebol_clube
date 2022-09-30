import { Model } from 'sequelize';

interface IModel<T extends Model> {
  create(objectToCreate: object): Promise<T>,
}

export default IModel;
