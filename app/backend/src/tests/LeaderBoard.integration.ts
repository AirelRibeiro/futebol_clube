import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import * as Sinon from 'sinon';
import { app } from '../app';
import Match from '../database/models/MatchModel';
import Team from '../database/models/TeamModel';
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

    });

    it('Verifica se o código de status é 200', async () => {

    });

    it('Verifica se os times estão na ordem correta', async () => {

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

    });

    it('Verifica se o código de status é 200', async () => {

    });

    it('Verifica se os times estão na ordem correta', async () => {

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

    });

    it('Verifica se o código de status é 200', async () => {

    });

    it('Verifica se os times estão na ordem correta', async () => {

    });
  });
});
