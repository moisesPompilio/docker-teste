const express = require ('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const pg_routes = require('./src/routes/pg.routes');
const mysqlRoutes = require ('./src/routes/mysql.routes');
const mongoose = require('mongoose');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/pg', pg_routes);
app.use('/mysql',mysqlRoutes);

app.listen(3000, '0.0.0.0'); 