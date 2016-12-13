import { HttpError } from '../error/index';

export default function(req, res, next) {
  if (!req.session.user) {
    return next(new HttpError(401, 'Вы не авторизованы'));
  }

  next();
};