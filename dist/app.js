'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _index = require('./routes/index');

var indexRoutes = _interopRequireWildcard(_index);

var _user = require('./routes/user');

var userRoutes = _interopRequireWildcard(_user);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// all environments

/**
 * Module dependencies.
 */

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(_express2.default.favicon());
app.use(_express2.default.logger('dev'));
app.use(_express2.default.bodyParser());
app.use(_express2.default.methodOverride());
app.use(_express2.default.cookieParser('your secret here'));
app.use(_express2.default.session());
app.use(app.router);
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
    app.use(_express2.default.errorHandler());
}

app.get('/', indexRoutes.index);
app.get('/users', userRoutes.list);

_http2.default.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});