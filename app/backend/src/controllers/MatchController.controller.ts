import { Request, Response } from 'express';
import MatchService from '../services/Match.service';

class MatchController {
  constructor(private matchService: MatchService) {}

  async updateInProgress(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const message = this.matchService.updateProgress(Number(id));

    return res.status(200).json(message);
  }
}

export default MatchController;
