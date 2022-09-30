import ITeam from './ITeam.interface';

interface IMatch {
  id?: number,
  homeTeam: number,
  homeTeamGoals: number,
  awayTeam: number,
  awayTeamGoals: number,
  inProgress: boolean,
  teamHome?: ITeam,
  teamAway?: ITeam
}

export default IMatch;
