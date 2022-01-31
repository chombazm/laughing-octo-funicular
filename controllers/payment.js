const axios = require('axios');
const pay = (req, res) => {
    const data = JSON.stringify({
        "transactionName": "Item Name",
        "amount": 1,
        "currency": "USD",
        "transactionReference": "516fa730-08b9-43c5-bb28-376cc04081f4",
        "customerFirstName": "Mundia",
        "customerLastName": "Mwala",
        "customerEmail": "mundia@getsparco.com",
        "customerPhone": "0961453688",
        "merchantPublicKey": "2fbf182c6fc14500b28fdc8c83eab734"
      });
      
      const config = {
        method: 'post',
        url: 'https://checkout.sparco.io/gateway/api/v1/checkout',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
}
module.exports = {
    pay
}
