import { User } from '../models/user';

export default function(req, res, next) {
  req.user = res.locals.user = null;

  if (!req.session.user) return next();

  User.findById(req.session.user, (err, user) => {
    if (err) return next(err);

    req.user = res.locals.user = user;
    next();
  });
};