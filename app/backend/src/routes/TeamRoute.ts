import * as express from 'express';
import Team from '../database/models/TeamModel';
import TeamService from '../services/Team.service';
import TeamController from '../controllers/TeamController.controller';

require('express-async-errors');

const team = new TeamController(new TeamService(Team));
const teamRouter = express.Router();

teamRouter.get('/:id', (req, res) => team.findByPk(req, res));
teamRouter.get('/', (req, res) => team.findAll(req, res));

export default teamRouter;
