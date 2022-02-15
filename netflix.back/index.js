const express = require ('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const routes = require('./src/routes/filmes.routes');


mongoose.connect('mongodb://localhost:27017/netflix');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', routes);

app.listen(3000, () => {
    console.log('Meu servidor esta funcionando');
}); 