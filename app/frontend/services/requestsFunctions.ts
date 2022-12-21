import axios from 'axios';
import IUser from '../interfaces/IUser.interface';

export async function requestLogin(user: IUser) {
  const { data } = await axios.post(
    'https://futebolclube-production.up.railway.app/login',
    user
  );
  return data;
}

export async function requestLeaderboard() {
  const { data } = await axios.get(
    'https://futebolclube-production.up.railway.app/leaderboard'
  );
  return data;
}
