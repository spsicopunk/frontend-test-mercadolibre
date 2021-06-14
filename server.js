const axios = require('axios');
const express = require('express');
const app = express();


const cors = require('cors');
app.use(cors())

app.use(express.static(__dirname + '/public'));



/*creación de endpoint para busqueda de productos*/

app.get("/api/items?:id", (req, res) =>{
    const paramID = req._parsedOriginalUrl.query;
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${paramID}`;
    axios.get(url).then(response => {
         const producto1 = response.data.results[0];
            console.log(producto1)
        /*             const num0 = 0;
                     const num1 = 1;
                     const num2 = 2;
                     const num3 = 3;*/

             const products = [
                 {
                     "autor": {
                         name: "sergio",
                         lastname: "ochoa"
                     },
                     description: [String, String, String],
                     item: [
                         {
                             "id": producto1.id,
                             "title": producto1.title,
                             "price": {
                                 "currency": "obj[num0].currency_id",
                                 "amount": "obj[num0].price",
                                 "decimals": "obj[num0].installments.amount"
                             },
                             "picture": "obj[num0].thumbnail",
                             "condition": "obj[num0].condition",
                             "free_shipping": "obj[num0].shipping.free_shipping"
                         }
                     ]
                 }
             ]



         res.json( {
             products: products
         })
    }).catch(error => {

    })
})

/*creación de endpoint para detalle de producto*/

app.get('/api/items/:id', (req, res) => {
    const paramID = req._parsedOriginalUrl.path.substr(11);
    const urlID = `https://api.mercadolibre.com/items/${paramID}`;
    axios.get(urlID).then(response => {
        const apiMercadolibreItem = response.data;
        const urlDescription = `https://api.mercadolibre.com/items/${paramID}/description`;
        axios.get(urlDescription).then(response => {
            const apiDescription = response.data;
            const description = {
                    "author": {
                        "name": String,
                        "lastname": String
                    },
                    "item": {
                        "id": apiMercadolibreItem.id,
                        "title": apiMercadolibreItem.title,
                        "price": {
                            "currency": apiMercadolibreItem.currency_id,
                            "amount": apiMercadolibreItem.price,
                            "decimals": apiMercadolibreItem.base_price,
                        },
                        "picture": apiMercadolibreItem.pictures[0].url,
                        "condition": apiMercadolibreItem.condition,
                        "free_shipping": apiMercadolibreItem.shipping.free_shipping,
                        "sold_quantity": apiMercadolibreItem.sold_quantity,
                        "description": apiDescription.plain_text
                    }
            }
            res.json({
                description: description
            })
        })
    }).catch(error => {

    })
});

const server = app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
});

