const axios = require('axios');

function getCurrencyRate() {
  return axios.get('https://v6.exchangerate-api.com/v6/b2462b7c7c99aa9181d172d6/latest/EUR').then(function (response) {
    return response.data.conversion_rates.AUD;
  });
}
module.exports = getCurrencyRate
