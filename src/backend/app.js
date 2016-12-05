
/**
 * Module dependencies.
 */

import express from 'express';
import * as indexRoutes from './routes/index';
import * as userRoutes from './routes/user';
import http from 'http';
import path from 'path';
import config from './config/index';

const app = express();
const PORT = config.get('port');
app.set('port', PORT);

http.createServer(app).listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});

app.use((req, res, next) => {
    return req.url === '/' ? res.end('Hello') : next();
});

app.use((req, res, next) => {
    return req.url === '/test' ? res.end('Test') : next();
});

app.use((req, res) => {
    return res.send(404);
});

// // all environments
// app.set('port', process.env.PORT || 3000);
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
// app.use(express.favicon());
// app.use(express.logger('dev'));
// app.use(express.bodyParser());
// app.use(express.methodOverride());
// app.use(express.cookieParser('your secret here'));
// app.use(express.session());
// app.use(app.router);
// app.use(express.static(path.join(__dirname, 'public')));
//
// // development only
// if ('development' === app.get('env')) {
//     app.use(express.errorHandler());
// }
//
// app.get('/', indexRoutes.index);
// app.get('/users', userRoutes.list);
