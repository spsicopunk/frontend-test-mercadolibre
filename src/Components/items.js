import React, { useState, useEffect, Component } from 'react';
import request from 'superagent';
import History from "../Components/history"

import axios from 'axios'

//images

import Addon from "../Assets/Img/envio.png";

class Items extends Component {

    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentWillMount() {
        const param = History.location.search.substring(3);

        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${param}`).then(response => {
                    const apiMercadolibre = response.data.results;
                    [apiMercadolibre].map(function(obj) {
                        obj.map(function(obj) {
                            /*console.log( obj)*/
                        });
                    });

                    console.log(response.status)

                }).catch(error => {})
        request
            .get(`http://localhost:4000/api/items?q=${param}`)
            .end((err, res) => {
                const products = JSON.parse(res.text).products;
                /*console.log(products);*/
                this.setState({
                    products: products[0].item
                });
            });
    }

    render() {
        var iter = this.state.products.map((res, i) => {
            console.log(res)
            return     <div className="products_item" key={i} rel={res.id}>

                    <div className="products_left">
                        <img src={res.picture} className="products_portrait" alt="portrait product"/>
                        <div className="products_box-text">
                            <h3 className="products_title">$ {res.price.amount} <img  hidden={!res.free_shipping} className="products_add-on" src={Addon} alt="portrait product"/>
                            </h3>
                            <p className="products_description">{res.title}<br/> completo
                                Unico!</p>
                        </div>
                    </div>
                    <div className="products_right">
                        <span className="products_tag">{res.condition}</span>
                    </div>
                </div>
        });
        return (
            <div className="products">
                {iter}
            </div>
        )
    }
}


export default Items;
