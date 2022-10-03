import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { allMatches } from './mocks/matches.mock';
import Match from '../database/models/MatchModel';

chai.use(chaiHttp);

describe('Rota de partidas', () => {

  describe('GET para buscar todas as partidas', () => {

    beforeEach(async () => {
      sinon.stub(Match, 'findAll').resolves(allMatches as Match[]);
    });
    
    afterEach(() => sinon.restore());
    
    it('Verifica se são retornados 40 partidas', async () => {
      const response = await chai.request(app).get('/matches');
    
      chai.expect(response).to.have.status(200);
      chai.expect(response.body).to.length(20);
    });
    
    it('Verifica as partidas estão organizados por Id', async () => {
      const response = await chai.request(app).get('/matches');
    
      chai.expect(response).to.have.status(200);
    
      response.body.forEach(({id}: {id: number}, i: number) => {
        chai.expect(id).to.be.equal(i + 1);
      });
    });
    
    it('Verifica se todos as partidas são retornadas corretamente', async () => {
      const response = await chai.request(app).get('/teams');
    
      chai.expect(response).to.have.status(200);
      chai.expect(response.body).to.deep.equal(allMatches);
    });
  });

  describe('GET para buscar partidas em andamento', () => {
  });

  describe('GET para buscar partidas finalizads', () => {
  });

  describe('POST para inserir partidas no banco de dados', () => {

    describe('Testa que não é possível inserir partida com times iguais', () => {

      it('Verifica se o status de retorno é 401', async () => {
        const response = await chai.request(app).post('/matches').set(COLOCAQR AQUI TOKEN VÀLIDO).send(fakeMatches);
      
        chai.expect(response.status).to.equal(401);
      });

      it('Verifica se o corpo da resposta possui uma mensagem de erro', async () => {
        const response = await chai.request(app).post('/matches').set(COLOCAQR AQUI TOKEN VÀLIDO).send(fakeMatches);
      
        chai.expect(response.body).to.have.property('message');
        chai.expect(response.body).to.deep.equal({ message: 'It is not possible to create a match with two equal teams' });
      });
    });
  });

  describe('PATCH para atualizar prograsso das partidas por Id na rota "/matches/id/finish"', () => {
  });

  describe('PATCH para atualizar partidas por Id', () => {
  });
});
