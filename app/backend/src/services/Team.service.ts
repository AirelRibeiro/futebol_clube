import Team from '../database/models/TeamModel';

class TeamService {
  constructor(private teamModel: typeof Team) {}

  async findAll(): Promise<Team[]> {
    const teams = await this.teamModel.findAll();

    return teams;
  }
}

export default TeamService;
