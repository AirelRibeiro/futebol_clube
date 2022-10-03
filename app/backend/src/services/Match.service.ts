import Team from '../database/models/TeamModel';
import Match from '../database/models/MatchModel';

class MatchService {
  constructor(private matchModel: typeof Match) {}

}

export default MatchService;
