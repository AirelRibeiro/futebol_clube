import Team from '../database/models/TeamModel';

class TeamService {
  constructor(private teamModel: typeof Team) {}

}

export default TeamService;
