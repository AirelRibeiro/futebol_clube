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

  describe('POST se um dos campos não for enviado', () => {

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

    it('Retornar erro de status 400 e mensagem de erro se o email não for enviado', async () => {
      const response = await chai.request(app).post('/login').send(userWithoutEmail);
      
      chai.expect(response.status).to.equal(400);
      chai.expect(response.body).to.have.property('message');
      chai.expect(response.body).to.deep.equal({ message: 'All fields must be filled' });
    });

    it('Retornar erro de status 400 e mensagem de erro se a password não for enviada', async () => {
      const response = await chai.request(app).post('/login').send(userWithoutPassword);
      
      chai.expect(response.status).to.equal(400);
      chai.expect(response.body).to.have.property('message');
      chai.expect(response.body).to.deep.equal({ message: 'All fields must be filled' });
    });
  });

  describe('POST se os dados enviados forem inválidos', () => {

    before(() => {
      Sinon.stub(User, 'findOne').resolves(undefined);
    });

    after(() => {
      Sinon.restore();
    });

    it('Retornar erro de status 401 se o email ou senha forem inválidos', async () => {
      const response = await chai.request(app).post('/login').send(fakeUser);
      
      chai.expect(response.status).to.equal(401);
      chai.expect(response.body).to.have.property('message');
      chai.expect(response.body).to.deep.equal({ message: 'Incorrect email or password' });
    });

    it('Retornar uma mensagem de erro se o email ou senha forem inválidos', async () => {
      const response = await chai.request(app).post('/login').send(fakeUser);
      
      chai.expect(response.body).to.have.property('message');
      chai.expect(response.body).to.deep.equal({ message: 'Incorrect email or password' });
    });
  });
});

describe('Rota de login/validate', () => {

  describe('GET com token de admin', () => {

    const authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTY2NDU3MzkxNX0.tKDTIJZz4LQ0jlGhDNRCmRJ5wYXppq39vMGlMF9yz5w';

    it('Deve retornar o status 200 e a role admin', async () => {
      const response = await chai.request(app).get('/login/validate').set({ authorization });
      
      chai.expect(response.status).to.equal(200);
      chai.expect(response.body).to.deep.equal({ role: 'admin' });
    });

  });

  describe('GET com token de user', () => {

    const authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyLCJ1c2VybmFtZSI6IlVzZXIiLCJyb2xlIjoidXNlciJ9LCJpYXQiOjE2NjQ1NzUzNDZ9.NH_kItsbhNiHsAc-GnuqMYIvZ2gFTmfBDZYyHzA9AQk';

    it('Deve retornar o status 200 e a role user', async () => {
      const response = await chai.request(app).get('/login/validate').set({ authorization });
      
      chai.expect(response.status).to.equal(200);
      chai.expect(response.body).to.deep.equal({ role: 'user' });
    });

  });
});