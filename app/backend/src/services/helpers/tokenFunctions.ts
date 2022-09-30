import * as jwt from 'jsonwebtoken';
import IJWTToken from '../../interfaces/IJWT.interface';
import 'dotenv/config';
import IPayloadJWT from '../../interfaces/IPayloadJWT.interface';

const secret = process.env.JWT_SECRET || 'jwt_secret';

export default function generateToken(id: number, username: string, role: string): IJWTToken {
  const token = jwt
    .sign({ data: { id, username, role } }, secret, { algorithm: 'HS256' });
  return { token };
}
