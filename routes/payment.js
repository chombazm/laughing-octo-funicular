const express = require('express');
const router = express.Router();
const {pay} = require('../controllers/payment');
const axios = require('axios');
const { nanoid } = require('nanoid')
router.get('/pay', async (req, res) => {
    let responseFromPayment;
    const amount = req.query.amount;

        const data = JSON.stringify({
            "transactionName": "Item Name",
            "amount": amount,
            "currency": "USD",
            "transactionReference": nanoid(),
            "customerFirstName": "Chomba",
            "customerLastName": "Chanda",
            "customerEmail": "chomba@bongohive.co.zm",
            "customerPhone": "0973001614",
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
          .then(async function (response) {
            //   responseFromPayment = await response.data;
              return res.send(JSON.stringify(response.data))
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            //   responseFromPayment = er;
            console.log(error);
          });
    
});

module.exports = router;