import React, {  Component } from 'react';
import {Link} from "react-router-dom";
import request from 'superagent';
import History from "../Components/history"

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
        request
            .get(`http://localhost:4000/api/items?q=${param}`)
            .end((err, res) => {
                const products = JSON.parse(res.text).products;
                this.setState({
                    products: products[0].item
                });
            });
    }

    render() {
        var iter = this.state.products.map((res, i) => {
            return <div className="products_item" key={i} rel={res.id}>
                    <Link to={"/items/"+res.id}></Link>
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
