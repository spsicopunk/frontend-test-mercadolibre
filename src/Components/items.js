import React, { useState, useEffect } from 'react';
//images

import ImgProduct1 from "../Assets/Img/pictures_mini/4.png";
import Addon from "../Assets/Img/envio.png";

const Items = ({ location }) => {

    return (
        <div className="products">
            <div className="products_item">
                <div className="products_left">
                    <img src={ImgProduct1} className="products_portrait" alt="portrait product" />
                    <div className="products_box-text">
                        <h3 className="products_title">$ 1.980 <img className="products_add-on" src={Addon} alt="portrait product" /></h3>
                        <p className="products_description">Apple Ipod Touch 5g 16gb igual A Nuevo<br/> completo Unico!</p>
                    </div>
                </div>
                <div className="products_right">
                    <span className="products_tag">Capital Federal</span>
                </div>
            </div>
        </div>
    )
}


export default Items;
