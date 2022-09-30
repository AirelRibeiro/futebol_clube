import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import * as Sinon from 'sinon';
import { app } from '../app';
import User from '../database/models/UserModel';
import ILogin from '../interfaces/ILogin.interface';

chai.use(chaiHttp);
