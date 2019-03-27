const express = require('express');
const path = require('path');

const routes = require('./routes/routes');

const app = express();

app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views/global'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(routes);

app.listen(3000);