import { Request, Response } from 'express';
import MatchService from '../services/Match.service';

class MatchController {
  constructor(private matchService: MatchService) {}

  async findAll(req: Request, res: Response): Promise<Response> {
    const { inProgress } = req.query;

    if (!inProgress) {
      const matches = await this.matchService.findAll();
      return res.status(200).json(matches);
    }
    const progress = inProgress === 'true';
    const matches = await this.matchService.findAllWithQuery(progress);
    return res.status(200).json(matches);
  }

  async updateInProgress(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const message = this.matchService.updateProgress(Number(id));

    return res.status(200).json(message);
  }

  async updateGoals(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const message = this.matchService
      .updateGoals(Number(id), Number(homeTeamGoals), Number(awayTeamGoals));

    return res.status(200).json(message);
  }
}

export default MatchController;
