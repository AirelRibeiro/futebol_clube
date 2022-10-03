import { DataTypes, Model } from 'sequelize';
import ITeam from '../../interfaces/ITeam.interface';
import db from '.';
import Team from './TeamModel';

class Match extends Model {
  id: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam:number;
  awayTeamGoals: number;
  inProgress: boolean;
  teamHome?: ITeam;
  teamAway?: ITeam;
}

Match.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    homeTeam: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    homeTeamGoals: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    awayTeam: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    awayTeamGoals: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    inProgress: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
  },
  {
    modelName: 'matches',
    underscored: true,
    sequelize: db,
    timestamps: false,
  },
);

Match.belongsTo(Team, { foreignKey: 'homeTeam', as: 'teamHome' });
Match.belongsTo(Team, { foreignKey: 'awayTeam', as: 'teamAway' });

export default Match;
