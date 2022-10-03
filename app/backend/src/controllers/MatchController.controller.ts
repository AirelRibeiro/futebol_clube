import { Request, Response } from 'express';
import MatchService from '../services/Match.service';

class MatchController {
  constructor(private matchService: MatchService) {}

}

export default MatchController;
