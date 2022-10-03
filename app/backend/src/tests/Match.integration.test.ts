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


    describe('Testa que não é possível inserir partida com times que não existem', () => {

      it('Verifica se o status de retorno é 401', async () => {
        const response = await chai.request(app).post('/matches').set(COLOCAQR AQUI TOKEN VÀLIDO).send(fakeMatches);
      
        chai.expect(response.status).to.equal(401);
      });

      it('Verifica se o corpo da tesposta possui uma mensagem de erro', async () => {
        const response = await chai.request(app).post('/matches').set(COLOCAQR AQUI TOKEN INVÁLIDO).send(fakeMatches);
      
        chai.expect(response.body).to.have.property('message');
        chai.expect(response.body).to.deep.equal({ message: 'Token must be a valid token' });
      });
    });

    describe('Testa que é possível inserir uma partida com os dados corretos', () => {

      it('Verifica se o status de retorno é 201', async () => {
        const response = await chai.request(app).post('/matches').set(COLOCAQR AQUI TOKEN VÀLIDO).send(validMatch);
      
        chai.expect(response.status).to.be.equal(201);
      });

      it('Verifica se o corpo da resposta possui as propriedades corretas', async () => {
        const response = await chai.request(app).post('/matches').set(COLOCAQR AQUI TOKEN VÁLIDO).send(validMatch);

        ['id', 'homeTeam', 'homeTeamGoals', 'awayTeam', 'awayTeamGoals', 'inProgress'].forEach((property) => {
          it(`Existe a propriedade ${property}`, () => {
            chai.expect(response.body).to.have.property(property);
          });
        });
      });

      it('Verifica se são retornados os dados da partida inserida', async () => {
        const response = await chai.request(app).post('/matches').set(COLOCAQR AQUI TOKEN VÁLIDO).send(validMatch);

        chai.expect(response.body).to.deep.equal(validMatch);
      });
    });
  });

  describe('PATCH para atualizar prograsso das partidas por Id na rota "/matches/id/finish"', () => {
  });

  describe('PATCH para atualizar partidas por Id', () => {
  });
});
