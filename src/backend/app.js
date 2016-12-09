
import express from 'express';
import * as indexRoutes from './routes/index';
import * as userRoutes from './routes/user';
import ejsLocals from 'ejs-locals';
import http from 'http';
import path from 'path';
import config from './config/index';
import getLogger from './lib/logger';

const log = getLogger(module);
const app = express();
app.engine('ejs', ejsLocals); // layout partial block
app.set('views', __dirname + '/template');
app.set('view engine', 'ejs');

app.use(express.favicon()); // /favicon.ico
if (app.get('env') === 'development') {
    app.use(express.logger('dev'));
} else {
    app.use(express.logger('default'));
}

app.use(express.bodyParser());  // req.body....

app.use(express.cookieParser()); // req.cookies

app.use(app.router);

app.get('/', (req, res, next) => {
    res.render('index', {
        body: '<b>Hello</b>'
    });
});

app.use(express.static(path.join(__dirname, 'public')));


app.use((err, req, res, next) => {
  // NODE_ENV = 'production'
    if (app.get('env') === 'development') {
        const errorHandler = express.errorHandler();
        errorHandler(err, req, res, next);
    } else {
        res.send(500);
    }
});
/*
var routes = require('./routes');
var user = require('./routes/user');
// all environments
app.get('/', routes.index);
app.get('/users', user.list);
*/

http.createServer(app).listen(config.get('port'), () => {
    log.info('Express server listening on port ' + config.get('port'));
});
