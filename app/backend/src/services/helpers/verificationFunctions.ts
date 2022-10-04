import { Op } from 'sequelize';
import Team from '../../database/models/TeamModel';

export default async function checkExistence(ids: number[]) {
  const teams = await Team.findAll({
    where: {
      [Op.or]: [
        { id: ids },
      ],
    },
  });
  return teams.length === 2;
}
