import checkAuth from '../middleware/checkAuth';
import * as frontpage from './frontpage';
import * as login from './login';
import * as logout from './logout';
import * as chat from './frontpage';

export default function(app) {

    app.get('/', frontpage.get);
    app.get('/login', login.get);
    app.post('/login', login.post);
    app.post('/logout', logout.post);
    app.get('/chat', checkAuth, chat.get);

}
