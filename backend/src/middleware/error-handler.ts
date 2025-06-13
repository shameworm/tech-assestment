import { Request, Response, NextFunction } from 'express';

import { HttpError } from '../model/http-error';

export const notFound = async (
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  const error = new HttpError('Could not find this route.', 404);
  next(error);
};

export const errorHandler = (
  error: HttpError,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    return next(error);
  }

  const statusCode =
    error.code && error.code >= 100 && error.code < 600 ? error.code : 500;

  res.status(statusCode).json({
    message: error.message || 'An unknown error occurred!',
  });
};
