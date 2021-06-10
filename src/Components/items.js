import React, { useState, useEffect, Component } from 'react';
import request from 'superagent';

//images

import Addon from "../Assets/Img/envio.png";

class Items extends Component {

    constructor() {
        super();
        this.state = {
            search: [],
            items: [],
        }
    }

    componentWillMount() {
        request
            .get('http://localhost:4000/api/search')
            .end((err, res) => {
                const search = JSON.parse(res.text).search;
                const items = JSON.parse(res.text).search[0].items;

                this.setState({
                    search: search,
                    items: items
                });
            });
    }


    render() {
        var items = this.state.items.map((res, i) => {
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
