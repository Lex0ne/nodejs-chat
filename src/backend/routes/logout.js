export function post(req, res, next) {
  const sid = req.session.id;

  const io = req.app.get('io');
  req.session.destroy((err) => {
    io.sockets.$emit("session:reload", sid);
    if (err) return next(err);

    res.redirect('/');
  });
}
