const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors())

app.use(express.static(__dirname + '/public'));


const products = [
    {
        "author": {
            "name": String,
            "lastname": String
        },
        categories: [String, String, String],
        item: {
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
        }
    }
];

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



app.get('/api/items/:query', (req, res) => {
    res.json({
        products: products
    })
});




/*app.get('/api/items/:query', (req, res) => {
    res.send({
        search: `${req.params.query}!}`
    })
});*/

app.get('/api/description', (req, res) => {
  res.json({
    description: description
  })

});

app.listen(port, function () {
  console.log(`Corriendo en puerto ${port}`);
});
