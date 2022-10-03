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

  });

  describe('GET para buscar partidas em andamento', () => {
  });

  describe('GET para buscar partidas finalizads', () => {
  });

  describe('POST para inserir partidas no banco de dados', () => {

  });

  describe('PATCH para atualizar prograsso das partidas por Id na rota "/matches/id/finish"', () => {
  });

  describe('PATCH para atualizar partidas por Id', () => {
  });
});
