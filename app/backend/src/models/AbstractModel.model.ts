import { Model } from 'sequelize';
import IModel from '../interfaces/IModel.interface';

abstract class AbstractModel<T extends Model> {
  protected _model: IModel<T>;

  constructor(model: IModel<T>) {
    this._model = model;
  }

  public async create(objectToCreate: object): Promise<object> {
    return this._model.create(objectToCreate);
  }
}

export default AbstractModel;
