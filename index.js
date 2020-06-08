let express = require('express');
let app = express();
let handlers = require('./handlers')
let cors = require('cors');
let bodyParser = require('body-parser');

app.get('/',(req, res) => res.send({hello: 'Hello World!'}));

app.use(handlers.notFound);

app.use(handlers.errorHandler);

app.listen(8000,() => console.log('server work in PORT 8000'));