import { DataTypes, Model } from 'sequelize';
import db from '.';

class Team extends Model {
  id: number;
  teamName: string;
}

Team.init(
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    teamName: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'team_name',
    },
  },
  {
    modelName: 'teams',
    underscored: true,
    sequelize: db,
    timestamps: false,
  },
);

export default Team;
