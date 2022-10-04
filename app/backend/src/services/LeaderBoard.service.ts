import IPointsAndMatches from '../interfaces/IPointsAndMatches.interface';
import Team from '../database/models/TeamModel';
import Match from '../database/models/MatchModel';
import ITeam from '../interfaces/ITeam.interface';
import ILeaderBoard from '../interfaces/ILeaderBoard.interface';

class LeaderBoard {
  constructor(
    private teamModel: typeof Team,
    private matchModel: typeof Match,
  ) {}

  async findAllData() {
    const teams = await this.teamModel.findAll();
    const matches = await this.matchModel.findAll({ where: { inProgress: false } });
    return { teams, matches };
  }

  static filterTeamMatches(id: number, matches: Match[]): Match[] {
    const matchesOfThisTeam = matches
      .filter(({ homeTeam, awayTeam }) => homeTeam === id || awayTeam === id);
    return matchesOfThisTeam;
  }

  static filterTeamHomeMatches(id: number, matches: Match[]): Match[] {
    const matchesOfThisTeam = matches
      .filter(({ homeTeam }) => homeTeam === id);
    return matchesOfThisTeam;
  }

  static filterTeamAwayMatches(id: number, matches: Match[]): Match[] {
    const matchesOfThisTeam = matches
      .filter(({ awayTeam }) => awayTeam === id);
    return matchesOfThisTeam;
  }

  static calculatePoints(
    acc: IPointsAndMatches,
    goalsOfThisTeam: number,
    goalsOfTheOtherTeam: number,
  ) {
    if (goalsOfThisTeam > goalsOfTheOtherTeam) {
      acc.totalPoints += 3;
      acc.totalVictories += 1;
    }
    if (goalsOfThisTeam < goalsOfTheOtherTeam) {
      acc.totalLosses += 1;
    }
    if (goalsOfThisTeam === goalsOfTheOtherTeam) {
      acc.totalPoints += 1;
      acc.totalDraws += 1;
    }
  }

  static calculatesPointsAndMatches(id: number, matches: Match[]) {
    return matches.reduce((acc, curr) => {
      if (curr.homeTeam === id) {
        this.calculatePoints(acc, curr.homeTeamGoals, curr.awayTeamGoals);
      }
      if (curr.awayTeam === id) {
        this.calculatePoints(acc, curr.awayTeamGoals, curr.homeTeamGoals);
      }
      acc.totalGames += 1;
      return acc;
    }, { totalPoints: 0,
      totalGames: 0,
      totalVictories: 0,
      totalDraws: 0,
      totalLosses: 0,
    });
  }

  static calculatesGoals(id: number, matches: Match[]) {
    return matches.reduce((acc, curr) => {
      if (curr.homeTeam === id) {
        acc.gF += curr.homeTeamGoals;
        acc.gW += curr.awayTeamGoals;
      }
      if (curr.awayTeam === id) {
        acc.gF += curr.awayTeamGoals;
        acc.gW += curr.homeTeamGoals;
      }
      return acc;
    }, { gF: 0, gW: 0 });
  }

  static calculatesEfficiency(totalPoints: number, totalGames: number) {
    const efficiency = (totalPoints / (totalGames * 3)) * 100;
    return efficiency.toFixed(2);
  }

  static createTeamBoard(
    team: ITeam,
    pointsAndMatches: IPointsAndMatches,
    goals: { gF: number, gW: number },
  ) {
    return {
      name: team.teamName,
      totalPoints: pointsAndMatches.totalPoints,
      totalGames: pointsAndMatches.totalGames,
      totalVictories: pointsAndMatches.totalVictories,
      totalDraws: pointsAndMatches.totalDraws,
      totalLosses: pointsAndMatches.totalLosses,
      goalsFavor: goals.gF,
      goalsOwn: goals.gW,
      goalsBalance: goals.gF - goals.gW,
      efficiency: LeaderBoard
        .calculatesEfficiency(pointsAndMatches.totalPoints, pointsAndMatches.totalGames),
    };
  }

  static generateTeamScore(team: ITeam, matches: Match[]) {
    const teamMatches = LeaderBoard.filterTeamMatches(team.id, matches);
    const pointsAndMatches = LeaderBoard.calculatesPointsAndMatches(team.id, teamMatches);
    const goals = LeaderBoard.calculatesGoals(team.id, teamMatches);
    return LeaderBoard.createTeamBoard(team, pointsAndMatches, goals);
  }

  static generateTeamHomeScore(team: ITeam, matches: Match[]) {
    const teamMatches = LeaderBoard.filterTeamHomeMatches(team.id, matches);
    const pointsAndMatches = LeaderBoard.calculatesPointsAndMatches(team.id, teamMatches);
    const goals = LeaderBoard.calculatesGoals(team.id, teamMatches);
    return LeaderBoard.createTeamBoard(team, pointsAndMatches, goals);
  }

  static generateTeamAwayScore(team: ITeam, matches: Match[]) {
    const teamMatches = LeaderBoard.filterTeamAwayMatches(team.id, matches);
    const pointsAndMatches = LeaderBoard.calculatesPointsAndMatches(team.id, teamMatches);
    const goals = LeaderBoard.calculatesGoals(team.id, teamMatches);
    return LeaderBoard.createTeamBoard(team, pointsAndMatches, goals);
  }

  static ordertotalPoints(teamOne: ILeaderBoard, teamTwo: ILeaderBoard) {
    switch (true) {
      case (teamOne.totalPoints > teamTwo.totalPoints):
        return -1;
        break;
      case (teamOne.totalPoints < teamTwo.totalPoints):
        return 1;
        break;
      default:
        return 0;
        break;
    }
  }

  static orderVictories(teamOne: ILeaderBoard, teamTwo: ILeaderBoard) {
    switch (true) {
      case (teamOne.totalVictories > teamTwo.totalVictories):
        return -1;
        break;
      case (teamOne.totalVictories < teamTwo.totalVictories):
        return 1;
        break;
      default:
        return 0;
        break;
    }
  }

  static orderGoalsBalance(teamOne: ILeaderBoard, teamTwo: ILeaderBoard) {
    switch (true) {
      case (teamOne.goalsBalance > teamTwo.goalsBalance):
        return -1;
        break;
      case (teamOne.goalsBalance < teamTwo.goalsBalance):
        return 1;
        break;
      default:
        return 0;
        break;
    }
  }

  static orderGoalsFavor(teamOne: ILeaderBoard, teamTwo: ILeaderBoard) {
    switch (true) {
      case (teamOne.goalsFavor > teamTwo.goalsFavor):
        return -1;
        break;
      case (teamOne.goalsFavor < teamTwo.goalsFavor):
        return 1;
        break;
      default:
        return 0;
        break;
    }
  }

  static orderGoalsOwn(teamOne: ILeaderBoard, teamTwo: ILeaderBoard) {
    switch (true) {
      case (teamOne.goalsOwn > teamTwo.goalsOwn):
        return -1;
        break;
      case (teamOne.goalsOwn < teamTwo.goalsOwn):
        return 1;
        break;
      default:
        return 0;
        break;
    }
  }

  static totalOrder(teamOne: ILeaderBoard, teamTwo: ILeaderBoard) {
    if (teamOne.totalPoints !== teamTwo.totalPoints) {
      return LeaderBoard.ordertotalPoints(teamOne, teamTwo);
    }
    if (teamOne.totalVictories !== teamTwo.totalVictories) {
      return LeaderBoard.orderVictories(teamOne, teamTwo);
    }
    if (teamOne.goalsBalance !== teamTwo.goalsBalance) {
      return LeaderBoard.orderGoalsBalance(teamOne, teamTwo);
    }
    if (teamOne.goalsFavor !== teamTwo.goalsFavor) {
      return LeaderBoard.orderGoalsFavor(teamOne, teamTwo);
    }
    if (teamOne.goalsOwn !== teamTwo.goalsOwn) {
      return LeaderBoard.orderGoalsOwn(teamOne, teamTwo);
    }
    return 0;
  }

  static orderBoard(board: ILeaderBoard[]) {
    const newBoard = board.sort((teamOne, teamTwo) => LeaderBoard.totalOrder(teamOne, teamTwo));
    return newBoard;
  }

  async generateLeaderBoard(): Promise<ILeaderBoard[]> {
    const { teams, matches } = await this.findAllData();
    const board = teams.map((team) => LeaderBoard.generateTeamScore(team, matches));
    const sortedBoard = LeaderBoard.orderBoard(board);
    return sortedBoard;
  }

  async generateHomeLeaderBoard(): Promise<ILeaderBoard[]> {
    const { teams, matches } = await this.findAllData();
    const board = teams.map((team) => LeaderBoard.generateTeamHomeScore(team, matches));
    const sortedBoard = LeaderBoard.orderBoard(board);
    return sortedBoard;
  }

  async generateAwayLeaderBoard(): Promise<ILeaderBoard[]> {
    const { teams, matches } = await this.findAllData();
    const board = teams.map((team) => LeaderBoard.generateTeamAwayScore(team, matches));
    const sortedBoard = LeaderBoard.orderBoard(board);
    return sortedBoard;
  }
}

export default LeaderBoard;
