import { User } from './models/user';

const user = new User({
  username: "Tester123",
  password: "secret"
});

user.save((err, user, affected) => {
  if (err) throw err;

  User.findOne({username: "Tester2"}, (err, tester) => {
    console.log(tester);
  });
});