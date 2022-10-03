import Team from '../database/models/TeamModel';
import Match from '../database/models/MatchModel';

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

  updateProgress(id: number): object {
    return this.matchModel.update({ inProgress: false }, { where: { id } })
      .then(() => ({ message: 'Finished' }));
  }

  updateGoals(id: number, hTG: number, aTG: number): object {
    return this.matchModel.update({ homeTeamGoals: hTG, awayTeamGoals: aTG }, { where: { id } })
      .then(() => ({ message: 'Updated match goals' }));
  }
}

export default MatchService;
