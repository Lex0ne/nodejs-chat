import { User, AuthError } from '../models/user';
import { HttpError } from '../error/index';

export function get(req, res) {
  res.render('login');
}

export function post(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  User.authorize(username, password, function(err, user) {
    if (err) {
      if (err instanceof AuthError) {
        return next(new HttpError(403, err.message));
      } else {
        return next(err);
      }
    }

    req.session.user = user._id;
    res.send({});

  });

}
