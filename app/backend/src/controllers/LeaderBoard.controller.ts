import { Request, Response } from 'express';
import LeaderBoardService from '../services/LeaderBoard.service';

export default class LeaderBoardController {
  constructor(private leaderBoardService: LeaderBoardService) {}

  async generateLeaderBoard(req: Request, res: Response) {
    const board = await this.leaderBoardService.generateLeaderBoard();
    return res.status(200).json(board);
  }

  async generateHomeLeaderBoard(req: Request, res: Response) {
    const board = await this.leaderBoardService.generateHomeLeaderBoard();
    return res.status(200).json(board);
  }

  async generateAwayLeaderBoard(req: Request, res: Response) {
    const board = await this.leaderBoardService.generateAwayLeaderBoard();
    return res.status(200).json(board);
  }
}
