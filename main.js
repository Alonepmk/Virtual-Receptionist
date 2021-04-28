const express = require('express');
const app = express();
const dhl = require('./routes/dhl');
const db_init = require('./db_init');


app.use(express.json());
app.use('/api/dhl', dhl);
db_init();


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));