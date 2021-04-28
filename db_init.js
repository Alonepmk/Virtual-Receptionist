const fs = require('fs')

const dhl_country_path = './database/dhl_country.db';
const dhl_rate_path = './database/dhl_rate.db';
const fedEx_rate_path = './database/fedEx_rate.db';

let dhl_country;
let dhl_rate;
let fedEx_rate;

function init_db() {
    let Datastore = require('nedb');
    try {
        if (!fs.existsSync(dhl_country_path)) {
            dhl_country = new Datastore({ filename: './database/dhl_country.db', autoload: true });
        }
    } catch (err) {
        console.error(err)
    }

    try {
        if (!fs.existsSync(dhl_country_path)) {
            dhl_rate = new Datastore({ filename: './database/dhl_rate.db', autoload: true });
        }
    } catch (err) {
        console.error(err)
    }

    try {
        if (!fs.existsSync(fedEx_rate_path)) {
            fedEx_rate = new Datastore({ filename: './database/fedEx_rate.db', autoload: true });
        }
    } catch (err) {
        console.error(err)
    }

    //dhl_country.loadDatabase();
    //dhl_rate.loadDatabase();
    console.log("database is created");

    // var country = JSON.parse(fs.readFileSync("./json/dhl_country.json"));
    // console.log(country);
    // country.forEach(c => {
    //      dhl_country.insert(c, function(err, doc) {
    //         console.log('Inserted');
    //      });
    // });


    // var rate = JSON.parse(fs.readFileSync("./json/dhl_rate.json"));
    // console.log(rate);
    // rate.forEach(r => {
    //     dhl_rate.insert(r, function(err, doc) {
    //             console.log('Inserted');
    //         });
    // });
}

module.exports = init_db
