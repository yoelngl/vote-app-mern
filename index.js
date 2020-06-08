require('dotenv').config();
let express = require('express');
let app = express();
let handlers = require('./handlers')
let cors = require('cors');
let bodyParser = require('body-parser');
let port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());


app.get('/',(req, res) => res.send({hello: 'Hello World!'}));

app.use(handlers.notFound);

app.use(handlers.errorHandler);

app.listen(port,() => console.log('server work in PORT 8000'));
