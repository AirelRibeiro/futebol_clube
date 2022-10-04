import { NextFunction, Request, Response } from 'express';

type errInformation = {
  [key: string]: { message: string, code: number }
};

const errorsInformation: errInformation = {
  invalidLoginUser: { message: 'Incorrect email or password', code: 401 },
  missingFields: { message: 'All fields must be filled', code: 400 },
  teamNotFound: { message: 'There is no team with such id!', code: 404 },
  invalidToken: { message: 'Token must be a valid token', code: 401 },
  equalsTeams: { message: 'It is not possible to create a match with two equal teams', code: 401 },
};

export default function errorMiddleware(
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  const { message } = error;
  const errorType = errorsInformation[message];
  return res.status(errorType.code).json({ message: errorType.message });
}
