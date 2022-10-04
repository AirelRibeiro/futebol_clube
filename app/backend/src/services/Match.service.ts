import Team from '../database/models/TeamModel';
import Match from '../database/models/MatchModel';
import checkExistence from './helpers/verificationFunctions';

class MatchService {
  constructor(private matchModel: typeof Match) {}

  async findAll(): Promise<Match[]> {
    const matches = await this.matchModel.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return matches;
  }

  async findAllWithQuery(inProgress: boolean): Promise<Match[]> {
    const matches = await this.matchModel.findAll({
      where: { inProgress },
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return matches;
  }

  async updateProgress(id: number): Promise<object> {
    return this.matchModel.update({ inProgress: false }, { where: { id } })
      .then(() => ({ message: 'Finished' }));
  }

  async updateGoals(id: number, hTG: number, aTG: number): Promise<object> {
    return this.matchModel.update({ homeTeamGoals: hTG, awayTeamGoals: aTG }, { where: { id } })
      .then(() => ({ message: 'Goals count changed successfully!' }));
  }

  async insertMatch(match: Match): Promise<Match> {
    const timeExists = await checkExistence([match.homeTeam, match.awayTeam]);
    if (!timeExists) throw new Error('teamNotFound');
    const createdMatch = await this.matchModel.create(match);
    return createdMatch;
  }
}

export default MatchService;
