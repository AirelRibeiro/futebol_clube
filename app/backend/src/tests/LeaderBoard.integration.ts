import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import * as Sinon from 'sinon';
import { app } from '../app';
import Match from '../database/models/MatchModel';
import Team from '../database/models/TeamModel';
import { finishedMatches } from './mocks/matches.mock';
import { allTeams } from './mocks/teams.mock';
