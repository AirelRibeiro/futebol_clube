import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { allMatches, inProgressMatches, finishedMatches } from './mocks/matches.mock';
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

  describe('GET para buscar partidas em andamento com query', () => {

    beforeEach(async () => {
      sinon.stub(Match, 'findAll').resolves(inProgressMatches as Match[]);
    });
    
    afterEach(() => sinon.restore());
    
    it('Verifica se são retornados 3 partidas', async () => {
      const response = await chai.request(app).get('/matches').query({inProgress: true });
    
      chai.expect(response).to.have.status(200);
      chai.expect(response.body).to.length(3);
    });
    
    it('Verifica se as partidas possuem as propriedades corretas', async () => {
      const response = await chai.request(app).get('/matches').query({inProgress: true });
    
      chai.expect(response).to.have.status(200);
      ['id', 'homeTeam', 'homeTeamGoals', 'awayTeam', 'awayTeamGoals', 'inProgress', 'teamHome', 'teamAway'].forEach((property) => {
        it(`Existe a propriedade ${property}`, () => {
          chai.expect(response.body).to.have.property(property);
        });
      });
    });
    
    it('Verifica se todos as partidas são retornadas corretamente', async () => {
      const response = await chai.request(app).get('/matches').query({inProgress: true });
    
      chai.expect(response).to.have.status(200);
      chai.expect(response.body).to.deep.equal(inProgressMatches);
    });
  });

  describe('GET para buscar partidas finalizadas com query', () => {

    beforeEach(async () => {
      sinon.stub(Match, 'findAll').resolves(finishedMatches as Match[]);
    });
    
    afterEach(() => sinon.restore());
    
    it('Verifica se são retornados 7 partidas', async () => {
      const response = await chai.request(app).get('/matches').query({inProgress: false });
    
      chai.expect(response).to.have.status(200);
      chai.expect(response.body).to.length(7);
    });
    
    it('Verifica se as partidas tem as propriedades corretas', async () => {
      const response = await chai.request(app).get('/matches').query({inProgress: false });
    
      chai.expect(response).to.have.status(200);
      ['id', 'homeTeam', 'homeTeamGoals', 'awayTeam', 'awayTeamGoals', 'inProgress', 'teamHome', 'teamAway'].forEach((property) => {
        it(`Existe a propriedade ${property}`, () => {
          chai.expect(response.body).to.have.property(property);
        });
    });
    
    it('Verifica se todos as partidas são retornadas corretamente', async () => {
      const response = await chai.request(app).get('/matches').query({inProgress: false });
    
      chai.expect(response).to.have.status(200);
      chai.expect(response.body).to.deep.equal(finishedMatches);
    });
  });

  describe('POST para inserir partidas no banco de dados', () => {
    
    describe('Testa que não é possível inserir partida com token inválido', () => {

      it('Verifica se o status de retorno é 401', async () => {
        const response = await chai.request(app).post('/matches').set(COLOCAQR AQUI TOKEN INVÁLIDO);
      
        chai.expect(response.status).to.equal(401);
      });

      it('Verifica se o corpo da tesposta possui uma mensagem de erro', async () => {
        const response = await chai.request(app).post('/matches').set(COLOCAQR AQUI TOKEN INVÁLIDO);
      
        chai.expect(response.body).to.have.property('message');
        chai.expect(response.body).to.deep.equal({ message: 'Token must be a valid token' });
      });
    });

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

    describe('Testa que é possível alterar o estado de progresso das partidas', () => {

      it('Verifica se o status de retorno é 200', async () => {
        const response = await chai.request(app).patch('/matches/23/finish').set(COLOCAQR AQUI TOKEN VÀLIDO).send(validMatch);
      
        chai.expect(response.status).to.be.equal(200);
      });

      it('Verifica se o corpo da resposta possui a mensagem correta', async () => {
        const response = await chai.request(app).patch('/matches/23/finish').set(COLOCAQR AQUI TOKEN VÁLIDO).send(validMatch);

        chai.expect(response.body).to.have.property('message');
        chai.expect(response.body).to.deep.equal({ message: 'Finished' });
      });

    });    
  });

  describe('PATCH para atualizar partidas por Id', () => {

    describe('Testa que é possível alterar a quantidade de gols de uma partida', () => {

      it('Verifica se o status de retorno é 200', async () => {
        const response = await chai.request(app).patch('/matches/14').set(COLOCAQR AQUI TOKEN VÀLIDO).send(OBJETO COM GOLS DE CADA TIME);
      
        chai.expect(response.status).to.be.equal(200);
      });

      it('Verifica se o corpo da resposta possui a mensagem correta', async () => {
        const response = await chai.request(app).patch('/matches/14').set(COLOCAQR AQUI TOKEN VÁLIDO).send(OBJETO COM GOLS DE CADA TIME);

        chai.expect(response.body).to.have.property('message');
        chai.expect(response.body).to.deep.equal({ message: 'Goals count changed successfully!' });
      });

    });
  });
});
