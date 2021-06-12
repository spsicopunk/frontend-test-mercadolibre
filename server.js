const axios = require('axios');
const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors())

app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
    console.log(`Corriendo en puerto ${port}`);
});

/*creación de endpoint para busqueda de productos*/
app.get("/api/items?:query", (req, res) =>{
    const url = `https://api.mercadolibre.com/sites/MLA/search?${req._parsedOriginalUrl.query}`;
    axios.get(url).then(response => {
        const apiMercadolibre = response.data.results;
        [apiMercadolibre].map(function(obj) {
            const num0 = 0;
            const num1 = 1;
            const num2 = 2;
            const num3 = 3;

            const products = [
                {
                    "autor": {
                        name: "sergio",
                        lastname: "ochoa"
                    },
                    description: [String, String, String],
                    item: [
                        {
                            "id": obj[num0].id,
                            "title": obj[num0].title,
                            "price": {
                                "currency": obj[num0].currency_id,
                                "amount": obj[num0].price,
                                "decimals": obj[num0].installments.amount
                            },
                            "picture": obj[num0].thumbnail,
                            "condition": obj[num0].condition,
                            "free_shipping": obj[num0].shipping.free_shipping
                        },
                        {
                            "id": obj[num1].id,
                            "title": obj[num1].title,
                            "price": {
                                "currency": obj[num1].currency_id,
                                "amount": obj[num1].price,
                                "decimals": obj[num1].installments.amount
                            },
                            "picture": obj[num1].thumbnail,
                            "condition": obj[num1].condition,
                            "free_shipping": obj[num1].shipping.free_shipping
                        },
                        {
                            "id": obj[num2].id,
                            "title": obj[num2].title,
                            "price": {
                                "currency": obj[num2].currency_id,
                                "amount": obj[num2].price,
                                "decimals": obj[num2].installments.amount
                            },
                            "picture": obj[num2].thumbnail,
                            "condition": obj[num2].condition,
                            "free_shipping": obj[num2].shipping.free_shipping
                        },
                        {
                            "id": obj[num3].id,
                            "title": obj[num3].title,
                            "price": {
                                "currency": obj[num3].currency_id,
                                "amount": obj[num3].price,
                                "decimals": obj[num3].installments.amount
                            },
                            "picture": obj[num3].thumbnail,
                            "condition": obj[num3].condition,
                            "free_shipping": obj[num3].shipping.free_shipping
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






