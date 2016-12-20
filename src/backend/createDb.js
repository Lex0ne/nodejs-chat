import mongoose from './lib/mongoose';
import async from 'async';
import { User } from './models/user';

async.series([
  open,
  dropDatabase,
  createUsers
], (err) => {
  console.log(arguments);
  mongoose.disconnect();
  process.exit(err ? 255 : 0);
});

function open(callback) {
  mongoose.connection.on('open', callback);
}

function dropDatabase(callback) {
  var db = mongoose.connection.db;
  db.dropDatabase(callback);
}

function createUsers(callback) {

  const users = [
    {username: 'Вася', password: 'supervasya'},
    {username: 'Петя', password: '123'},
    {username: 'admin', password: 'thetruehero'}
  ];

  async.each(users, (userData, callback) => {
    var user = new User(userData);
    user.save(callback);
  }, callback);
}