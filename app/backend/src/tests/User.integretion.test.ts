import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import * as Sinon from 'sinon';
import { app } from '../app';
import User from '../database/models/UserModel';
import ILogin from '../interfaces/ILogin.interface';

chai.use(chaiHttp);

describe('Rota de login', () => {

  const userLogin: ILogin = { email: 'admin@admin.com', password: 'secret_admin' };
  const userWithoutEmail = { password: 'secret_admin' };
  const userWithoutPassword = { email: 'admin@admin.com' };
  const fakeUser = { email: 'admin@admin123.com', password: 'not_secret_admin' };

  describe('POST com usuário válido', () => {

    before(() => {
      Sinon.stub(User, 'findOne').resolves({
        id: 1,
        username: 'Admin',
        role: 'admin',
        email: 'admin@admin.com',
        password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
      } as User);
    });

    after(() => {
      Sinon.restore();
    });

    it('Deve ser capaz de realizar o login do usuário e retornar o status 200', async () => {
      const response = await chai.request(app).post('/login').send(userLogin);
      
      chai.expect(response.status).to.equal(200);
    });

    it('Deve ser capaz de realizar o login do usuário e retornar um token', async () => {
      const response = await chai.request(app).post('/login').send(userLogin);
      
      chai.expect(response.body).to.have.property('token');
    });
  });
