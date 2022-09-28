import UserModel from '../database/models/UserModel';
const { expect } = require('chai')

describe('Testa o UsersModel', () => {
  const user = new UserModel();  

  describe('Testa a existência das propriedades corretas', () => {
    ['id', 'username', 'role', 'email', 'password'].forEach((property) => {
      it(`Verifica se existe a propriedade ${property}`, () => {
        expect(user).to.have.property(property);
      });
    });
  });
});
