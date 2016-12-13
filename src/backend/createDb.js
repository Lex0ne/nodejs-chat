import mongoose from './lib/mongoose';
import async from 'async';


async.series([
  open,
  dropDatabase,
  requireModels,
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

function requireModels(callback) {
  async.each(Object.keys(mongoose.models), (modelName, callback) => {
    mongoose.models[modelName].ensureIndexes(callback);
  }, callback);
}

function createUsers(callback) {

  const users = [
    {username: 'Вася', password: 'supervasya'},
    {username: 'Петя', password: '123'},
    {username: 'admin', password: 'thetruehero'}
  ];

  async.each(users, (userData, callback) => {
    var user = new mongoose.models.User(userData);
    user.save(callback);
  }, callback);
}
