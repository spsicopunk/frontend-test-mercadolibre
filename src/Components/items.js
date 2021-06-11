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
            products: [],
        }
    }

    componentWillMount() {
        const param = History.location.search.substring(3);

        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${param}`).then(response => {
            console.log(response)
           this.setState({

               post: response.data
           })
        }).catch(error => {

        })
        request
            .get(`http://localhost:4000/api/items?q=${param}`)
            .end((err, res) => {
                const products = JSON.parse(res.text);
                /*console.log(products.products[0].item.currency);*/
                this.setState({
                    name: products.products[0].item.currency = "perro"
                });
            });
    }


    render() {
        var items = this.state.products.map((res, i) => {
            return <>
            <div className="products_item" key={i} rel={res.id}>
                <div className="products_left">
                    <img src={res.picture} className="products_portrait" alt="portrait product"/>
                    <div className="products_box-text">
                        <h3 className="products_title">$ {res.price.currency} <img className="products_add-on" src={Addon} alt="portrait product"/>
                        </h3>
                        <p className="products_description">{res.title}<br/> completo
                            Unico!</p>
                    </div>
                </div>
                <div className="products_right">
                    <span className="products_tag">{res.condition}</span>
                </div>
            </div>
            </>
        });
        return (
            <div className="products">
                {items}
            </div>
        )
    }
}


export default Items;
