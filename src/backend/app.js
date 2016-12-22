import express from 'express';
import http from 'http';
import path from 'path';
import config from './config/index';
import _log from './lib/log';
import {HttpError} from './error/index';
import sessionStore from './lib/sessionStore';
import ejs from 'ejs-locals';
import sendHttpError from './middleware/sendHttpError';
import loadUser from './middleware/loadUser';
import routes from './routes/index';
import socket from './socket/index';
import {User} from './models/user';
const log = _log(module);
const app = express();

app.engine('ejs', ejs);
app.set('views', __dirname + '/template');
app.set('view engine', 'ejs');

app.use(express.favicon());

if (app.get('env') === 'development') {
  app.use(express.logger('dev'));
} else {
  app.use(express.logger('default'));
}

app.use(express.bodyParser());

app.use(express.cookieParser());

app.use(express.session({
    secret: config.get('session:secret'),
    key: config.get('session:key'),
    cookie: config.get('session:cookie'),
    store: sessionStore
}));

app.use(sendHttpError);
app.use(loadUser);
app.use(app.router);
routes(app);
app.use(express.static(path.join(__dirname, 'public')));


app.use((err, req, res, next) => {
  if (typeof err == 'number') {
    err = new HttpError(err);
  }

  if (err instanceof HttpError) {
    res.sendHttpError(err);
  } else {
    if (app.get('env') == 'development') {
      express.errorHandler()(err, req, res, next);
    } else {
      log.error(err);
      err = new HttpError(500);
      res.sendHttpError(err);
    }
  }
});


const server = http.createServer(app);
server.listen(config.get('port'), () => {
  log.info('Express server listening on port ' + config.get('port'));
});

const io = socket(server);
app.set('io', io);