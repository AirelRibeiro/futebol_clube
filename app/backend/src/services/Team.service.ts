import Team from '../database/models/TeamModel';

class TeamService {
  constructor(private teamModel: typeof Team) {}

  async findAll(): Promise<Team[]> {
    const teams = await this.teamModel.findAll();

    return teams;
  }

  async findByPk(id: number): Promise<Team> {
    const team = await this.teamModel.findByPk(id);

    if (!team) throw new Error('teamNotFound');

    return team;
  }
}

export default TeamService;
