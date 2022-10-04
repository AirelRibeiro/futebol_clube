import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import * as Sinon from 'sinon';
import { app } from '../app';
import Match from '../database/models/MatchModel';
import Team from '../database/models/TeamModel';
import { leaderBoard, homeLeaderBoard, awayLeaderBoard } from './mocks/leaderBoard.mock';
import { finishedMatches } from './mocks/matches.mock';
import { allTeams } from './mocks/teams.mock';


chai.use(chaiHttp);

describe('Rota de leaderboard', () => {

  describe('GET para listar a classificação dos times', () => {

    beforeEach(async () => {
      Sinon.stub(Team, 'findAll').resolves(allTeams as Team[]);
      Sinon.stub(Match, 'findAll').resolves(finishedMatches as Match[]);
    });
    
    afterEach(() => Sinon.restore());

    it('Verifica se é retornado o número correto de times', async () => {
      const response = await chai.request(app).get('/leaderboard');

      
      chai.expect(response).to.have.status(200);
      chai.expect(response.body).to.length(20);
    });

    it('Verifica se o código de status é 200', async () => {
      const response = await chai.request(app).get('/leaderboard');
    
      chai.expect(response).to.have.status(200);
    });

    it('Verifica se os times estão na ordem correta', async () => {
      const response = await chai.request(app).get('/leaderboard');
    
      chai.expect(response).to.have.status(200);
      chai.expect(response.body).to.deep.equal(leaderBoard);
    });
  });
});

describe('Rota de leaderboard/home', () => {

  describe('GET para listar a classificação dos times', () => {

    beforeEach(async () => {
      Sinon.stub(Team, 'findAll').resolves(allTeams as Team[]);
      Sinon.stub(Match, 'findAll').resolves(finishedMatches as Match[]);
    });
    
    afterEach(() => Sinon.restore());

    it('Verifica se é retornado o número correto de times', async () => {
      const response = await chai.request(app).get('/leaderboard/home');

      
      chai.expect(response).to.have.status(200);
      chai.expect(response.body).to.length(20);
    });

    it('Verifica se o código de status é 200', async () => {
      const response = await chai.request(app).get('/leaderboard/home');

      chai.expect(response).to.have.status(200);
    });

    it('Verifica se os times estão na ordem correta', async () => {
      const response = await chai.request(app).get('/leaderboard/home');
    
      chai.expect(response).to.have.status(200);
      chai.expect(response.body).to.deep.equal(homeLeaderBoard);
    });
  });
});

describe('Rota de leaderboard/away', () => {

  describe('GET para listar a classificação dos times', () => {

    beforeEach(async () => {
      Sinon.stub(Team, 'findAll').resolves(allTeams as Team[]);
      Sinon.stub(Match, 'findAll').resolves(finishedMatches as Match[]);
    });
    
    afterEach(() => Sinon.restore());

    it('Verifica se é retornado o número correto de times', async () => {
      const response = await chai.request(app).get('/leaderboard/away');

      
      chai.expect(response).to.have.status(200);
      chai.expect(response.body).to.length(20);
    });

    it('Verifica se o código de status é 200', async () => {
      const response = await chai.request(app).get('/leaderboard/away');

      console.log(response.body);
      
      chai.expect(response).to.have.status(200);
    });

    it('Verifica se os times estão na ordem correta', async () => {
      const response = await chai.request(app).get('/leaderboard/away');
    
      chai.expect(response).to.have.status(200);
      chai.expect(response.body).to.deep.equal(awayLeaderBoard);
    });
  });
});
