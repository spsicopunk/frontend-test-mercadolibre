import React from 'react';
import logo from "../Assets/Img/picture_real/ipod.png";

function Detail() {
    return (
        <section className="detail">
            <div className="detail_left">
                <img src={logo} className="detail_product-img" alt="Celular" />
                <h3 className="detail_sub-title">Descripción del producto</h3>
                <p className="detail_description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur cum dignissimos illo nam odit sunt? Animi atque consequatur culpa, eaque eius facere harum molestiae quis tempora voluptas? Enim, perspiciatis.
                </p>
            </div>
            <div className="detail_right">
                <h1 className="detail_state">Nuevo - 234 vendidos</h1>
                <h2 className="detail_title-product">Deco Reverse <br/> Sobrero Oxford</h2>
                <h3 className="detail_price">$ 1.980</h3>
                <a href="#" className="btns btns_primary">Comprar</a>
            </div>
        </section>
    )
}

export default Detail;
