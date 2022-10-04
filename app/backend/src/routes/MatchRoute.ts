import * as express from 'express';
import Match from '../database/models/MatchModel';
import MatchService from '../services/Match.service';
import MatchController from '../controllers/MatchController.controller';
import verifyMatchFields from '../middlewares/authMiddleware';

require('express-async-errors');

const match = new MatchController(new MatchService(Match));
const matchRouter = express.Router();

matchRouter.get('/', (req, res) => match.findAll(req, res));
matchRouter.post('/', verifyMatchFields, (req, res) => match.insertMatch(req, res));
matchRouter.patch('/:id/finish', (req, res) => match.updateInProgress(req, res));
matchRouter.patch('/:id', (req, res) => match.updateGoals(req, res));

export default matchRouter;
