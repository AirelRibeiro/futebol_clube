import { Request, Response } from 'express';
import TeamService from '../services/Team.service';

export default class TeamController {
  constructor(private teamService: TeamService) {}

  async findAll(_req: Request, res: Response): Promise<Response> {
    const team = await this.teamService.findAll();

    return res.status(200).json(team);
  }

  async findByPk(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const team = await this.teamService.findByPk(Number(id));

    return res.status(200).json(team);
  }
}
