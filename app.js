const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const routes = require('./routes/routes');
const client = require('./util/database');



const app = express();

client.connect();


app.set('view engine', 'pug');

// app.set('views', path.join(__dirname, 'views/global'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/public')));
app.use(routes);

app.listen(3000);