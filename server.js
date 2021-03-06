const axios = require('axios');
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors())

app.use(express.static(__dirname + '/public'));


/*creación de endpoint para busqueda de productos*/

app.get("/api/items?:query", (req, res) =>{
    const paramID = req._parsedOriginalUrl.query;
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${paramID}`;
    axios.get(url).then(response => {
        const producto1 = response.data.results[0];
        const producto2 = response.data.results[1];
        const producto3 = response.data.results[2];
        const producto4 = response.data.results[3];

        const filters = response.data.filters[0];
        const filters_available = response.data.available_filters[0];

        const descriptionArray = function(){
            if (filters != null){
                const category1 = filters.values[0].path_from_root[0].name;
                const category2 = filters.values[0].path_from_root[1].name;
                const categoryList = [category1, category2, paramID];
                return categoryList
            }else{
                const categorys1 = filters_available.values[0].name;
                const categorys2 = filters_available.values[1].name;
                const categorysList = [categorys1,categorys2, paramID];
                return categorysList
            }
        }

        const products = [
            {
                "autor": {
                    name: "Sergio Camilo",
                    lastname: "Ochoa Rodriguez"
                },
                "categories": descriptionArray(),
                "item": [
                    {
                        "id": producto1.id,
                        "title": producto1.title,
                        "price": {
                            "currency": producto1.currency_id,
                            "amount": producto1.price,
                            "decimals": producto1.installments.amount
                        },
                        "picture": producto1.thumbnail,
                        "condition": producto1.condition,
                        "free_shipping": producto1.shipping.free_shipping
                    },
                    {
                        "id": producto2.id,
                        "title": producto2.title,
                        "price": {
                            "currency": producto2.currency_id,
                            "amount": producto2.price,
                            "decimals": producto2.installments.amount
                        },
                        "picture": producto2.thumbnail,
                        "condition": producto2.condition,
                        "free_shipping": producto2.shipping.free_shipping
                    },
                    {
                        "id": producto3.id,
                        "title": producto3.title,
                        "price": {
                            "currency": producto3.currency_id,
                            "amount": producto3.price,
                            "decimals": producto3.installments.amount
                        },
                        "picture": producto3.thumbnail,
                        "condition": producto3.condition,
                        "free_shipping": producto3.shipping.free_shipping
                    },
                    {
                        "id": producto4.id,
                        "title": producto4.title,
                        "price": {
                            "currency": producto4.currency_id,
                            "amount": producto4.price,
                            "decimals": producto4.installments.amount
                        },
                        "picture": producto4.thumbnail,
                        "condition": producto4.condition,
                        "free_shipping": producto4.shipping.free_shipping
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
                    "name": "sergio Camilo",
                    "lastname": "Ochoa Rodriguez"
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


const server = app.listen(process.env.PORT || 4000, () => {
    const port = server.address().port;
    console.log(`Corriendo en puerto ${port}`);
});
