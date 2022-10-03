import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
chai.use(chaiHttp);

  describe('GET para buscar todos os times', () => {

    beforeEach(async () => {
      sinon.stub(Team, 'findAll').resolves(allTeams as Team[]);
    });

    afterEach(() => sinon.restore());

    it('Verifica se são retornados 20 times', async () => {
      const response = await chai.request(app).get('/teams');

      chai.expect(response).to.have.status(200);
      chai.expect(response.body).to.length(20);
    });

    it('Verifica os times estão organizados por Id', async () => {
      const response = await chai.request(app).get('/teams');

      chai.expect(response).to.have.status(200);

      response.body.forEach(({id}: {id: number}, i: number) => {
        chai.expect(id).to.be.equal(i + 1);
      });
    });

    it('Verifica se todos os times são retornados corretamente', async () => {
      const response = await chai.request(app).get('/teams');

      chai.expect(response).to.have.status(200);
      chai.expect(response.body).to.deep.equal(allTeams);
    });
  });
