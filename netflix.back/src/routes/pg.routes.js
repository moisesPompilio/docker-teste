
const express = require('express');
const router = express.Router();
var database = require("../database/pgDatabase");

router.post('/', async (req, res) => {

        const contato = req.body;
        var query = await database.insert(contato).into("contato").then(data => {
            res.json({ error: false, conata:conata, filme: response });
        }).catch(err => {
            res.json({ error: contato , message: err.message });
        });
        

});

router.get('/', async(req,res) => {
    res.json({ error: "fodeu"});
})



module.exports = router