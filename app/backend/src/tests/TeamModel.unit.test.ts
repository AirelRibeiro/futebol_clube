import TeamModel from '../database/models/TeamModel';
import { expect } from 'chai';

describe('Verifica TeamModel', () => {
  const user = new TeamModel();

  describe('Testa a existência das propriedades corretas', () => {
    ['id', 'teamName'].forEach((property) => {
      it(`Verifica se existe a propriedade ${property}`, () => {
        expect(user).to.have.property(property);
      });
    });
  });
});
