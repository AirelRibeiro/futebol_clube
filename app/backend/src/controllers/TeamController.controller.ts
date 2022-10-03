import { Request, Response } from 'express';
import TeamService from '../services/Team.service';

export default class TeamController {
  constructor(private teamService: TeamService) {}

}
