import * as express from 'express';
import LeaderBoardController from '../controllers/LeaderBoard.controller';
import Match from '../database/models/MatchModel';
import Team from '../database/models/TeamModel';
import LeaderBoardService from '../services/LeaderBoard.service';

require('express-async-errors');

const leaderBoard = new LeaderBoardController(new LeaderBoardService(Team, Match));
const leaderBoardRouter = express.Router();

leaderBoardRouter.get('/home', (req, res) => leaderBoard.generateHomeLeaderBoard(req, res));
leaderBoardRouter.get('/away', (req, res) => leaderBoard.generateAwayLeaderBoard(req, res));
leaderBoardRouter.get('/', (req, res) => leaderBoard.generateLeaderBoard(req, res));

export default leaderBoardRouter;
