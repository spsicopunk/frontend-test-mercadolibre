const axios = require('axios');
const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors())

app.use(express.static(__dirname + '/public'));


app.get("/api/items?:query", (req, res) =>{
    const url = `https://api.mercadolibre.com/sites/MLA/search?${req._parsedOriginalUrl.query}`;
    axios.get(url).then(response => {
        const apiMercadolibre = response.data.results;
        [apiMercadolibre].map(function(obj) {
            const products = [
                {
                    "autor": {
                        name: "sergio",
                        lastname: "ochoa"
                    },
                    description: [String, String, String],
                    item: [
                        {
                            "id": obj[0].id,
                            "title": obj[0].title,
                            "price": {
                                "currency": obj[0].currency_id,
                                "amount": obj[0].price,
                                "decimals": obj[0].installments.amount,
                            },
                            "picture": obj[0].thumbnail,
                            "condition": obj[0].condition,
                            "free_shipping": obj[0].shipping.free_shipping,
                        },
                        {
                            "id": obj[1].id,
                            "title": obj[1].title,
                            "price": {
                                "currency": obj[1].currency_id,
                                "amount": obj[1].price,
                                "decimals": obj[1].installments.amount,
                            },
                            "picture": obj[1].thumbnail,
                            "condition": obj[1].condition,
                            "free_shipping": obj[1].shipping.free_shipping,
                        },
                        {
                            "id": obj[2].id,
                            "title": obj[2].title,
                            "price": {
                                "currency": obj[2].currency_id,
                                "amount": obj[2].price,
                                "decimals": obj[2].installments.amount,
                            },
                            "picture": obj[2].thumbnail,
                            "condition": obj[2].condition,
                            "free_shipping": obj[2].shipping.free_shipping,
                        },
                        {
                            "id": obj[3].id,
                            "title": obj[3].title,
                            "price": {
                                "currency": obj[3].currency_id,
                                "amount": obj[3].price,
                                "decimals": obj[3].installments.amount,
                            },
                            "picture": obj[3].thumbnail,
                            "condition": obj[3].condition,
                            "free_shipping": obj[3].shipping.free_shipping,
                        }
                    ]
                }
            ]
            res.json( {
                products: products
            })
        });
    }).catch(error => {

    })
})


/*[0-4]*/


const description = [
  {
    "author": {
      "name": String,
      "lastname": String
     },
      "item": {
          "id": String,
          "title": String,
          "price": {
            "currency": String,
            "amount": Number,
            "decimals": Number,
          },
          "picture": String,
          "condition": String,
          "free_shipping": Boolean,
          "sold_quantity": Number,
          "description": String
      }
    }
];



app.get('/api/description', (req, res) => {
  res.json({
    description: description
  })

});





app.listen(port, function () {
  console.log(`Corriendo en puerto ${port}`);
});
