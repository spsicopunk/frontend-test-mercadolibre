const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors())

app.use(express.static(__dirname + '/public'));

const search = [
    {
        "author": {
            "name": "Sergio Camilo",
            "lastname": "Ochoa Rodriguez"
        },
        categories: ["gato", "gato2", "gato3"],
        items: [
            {
                "id": 0,
                "title": "Apple Ipod Touch 5g 16gb igual A Nuevo",
                "price": {
                    "currency": 1980,
                    "amount": Number,
                    "decimals": Number
                },
                "picture": "https://firebasestorage.googleapis.com/v0/b/tdah-8888.appspot.com/o/Freelance%2F1.png?alt=media&token=a22f73e8-19d5-4739-a562-836acbf6573a",
                "condition": "Capital Federal",
                "free_shipping": false
            },
            {
                "id": 1,
                "title": "Apple Ipod Touch 5g 16gb igual A Nuevo",
                "price": {
                    "currency": 2000,
                    "amount": Number,
                    "decimals": Number
                },
                "picture": "https://firebasestorage.googleapis.com/v0/b/tdah-8888.appspot.com/o/Freelance%2F2.png?alt=media&token=2cc0ec81-9d48-4675-b748-efadcb2c2696",
                "condition": "Mendoza",
                "free_shipping": true
            },
            {
                "id": 2,
                "title": "Apple Ipod Touch 5g 16gb igual A Nuevo",
                "price": {
                    "currency": 3450,
                    "amount": Number,
                    "decimals": Number
                },
                "picture": "https://firebasestorage.googleapis.com/v0/b/tdah-8888.appspot.com/o/Freelance%2F3.png?alt=media&token=865a2487-81f3-4b5b-99d2-59f41acd5bfa",
                "condition": "Capital Federal",
                "free_shipping": true
            },
            {
                "id": 3,
                "title": "Apple Ipod Touch 5g 16gb igual A Nuevo",
                "price": {
                    "currency": 1500,
                    "amount": Number,
                    "decimals": Number
                },
                "picture": "https://firebasestorage.googleapis.com/v0/b/tdah-8888.appspot.com/o/Freelance%2F4.png?alt=media&token=46a08e62-e1ad-4a8f-af80-6f4251b2f873",
                "condition": "Mendoza Federal",
                "free_shipping": false
            }
        ]
    }
];

const description = [
  {
    "author": {
      "name": "gato",
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

app.get('/api/search', (req, res) => {
  res.json({
    search: search
  })
});

app.get('/api/description', (req, res) => {
  res.json({
    description: description
  })

});

app.listen(4000, function () {
  console.log('server on port 4000');
});
