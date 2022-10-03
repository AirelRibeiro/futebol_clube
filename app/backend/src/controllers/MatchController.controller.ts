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
    const matches = await this.matchService.findAllWithQuery(Boolean(inProgress));
    return res.status(200).json(matches);
  }

}

export default MatchController;
