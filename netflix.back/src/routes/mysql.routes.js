const express = require('express');
const usuariRoutes = express.Router();
var database = require("../database/mysqlDatabase");


usuariRoutes.post('/', async (req, res) => {

        const contato = req.body;
        var query = await database.insert(contato).into("contato").then(data => {
            res.json({ error: false, data, filme: response });
        }).catch(err => {
            res.json({ message: err.message });
        });


});



module.exports = usuariRoutes;