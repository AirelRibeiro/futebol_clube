import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret = process.env.JWT_SECRET || 'jwt_secret';

export default function verifyMatchFields(req: Request, _res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  if (!authorization) throw new Error('tokenNotSent');
  try {
    jwt.verify(authorization, secret);
  } catch (err) {
    throw new Error('invalidToken');
  }

  const { homeTeam, awayTeam } = req.body;
  if (homeTeam === awayTeam) throw new Error('equalsTeams');

  next();
}
