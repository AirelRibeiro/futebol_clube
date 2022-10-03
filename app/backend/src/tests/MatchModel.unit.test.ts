import MatchModel from '../database/models/MatchModel';
import { expect } from 'chai';

describe('Verifica MatchModel', () => {
  const user = new MatchModel();

  describe('Testa a existência das propriedades corretas', () => {
    ['id', 'homeTeam', 'homeTeamGoals', 'awayTeam', 'awayTeamGoals', 'inProgress'].forEach((property) => {
      it(`Verifica se existe a propriedade ${property}`, () => {
        expect(user).to.have.property(property);
      });
    });
  });
});
