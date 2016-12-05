import nconf from 'nconf';
import path from 'path';

export default nconf.argv()
   .env()
   .file({ file: path.join(__dirname, 'config.json') });