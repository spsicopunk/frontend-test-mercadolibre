import React  from 'react';
import {Link} from "react-router-dom";

//imagen de envio gratis
import Addon from "../Assets/Img/envio.png";

function Items ({id, picture, title, price, free_shipping, condition}) {
    return (
            <div className="products_item" rel={id}>
                <Link to={`/items/${id}`}></Link>
                <div className="products_left">
                    <img src={picture} className="products_portrait" alt="portrait product"/>
                    <div className="products_box-text">
                        <h3 className="products_title">$ {price} <img hidden={!free_shipping} className="products_add-on" src={Addon} alt="portrait product"/>
                        </h3>
                        <p className="products_description">{title}</p>
                    </div>
                </div>
                <div className="products_right">
                    <span className="products_tag">{condition}</span>
                </div>
            </div>
    )
}


export default Items;
