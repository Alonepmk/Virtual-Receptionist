const express = require('express');
const router = express.Router();
const Datastore = require('nedb');
const euro_to_aud = require('../utils/currency_rate');

let dhl_country = new Datastore({ filename: './database/dhl_country.db', autoload: true });
let dhl_rate = new Datastore({ filename: './database/dhl_rate.db', autoload: true });

router.get('/getQuote/:country/:weight', (req, res) => {
    var country = req.params.country;
    var weight = req.params.weight;

    dhl_country.find({ country: country }, (err, docs) => {
        let zone = docs[0].zone;
        dhl_rate.find({ zone: zone }, async (err, docs) => {
            let temp_docs = docs[0];
            let base_export_rate = temp_docs[weight];
            let aud_exchange = await euro_to_aud();
            let quote = base_export_rate * aud_exchange;
            res.end("The base quote " + quote);
        });
    });

});

module.exports = router;