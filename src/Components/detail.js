import React from 'react';


function Detail({id, picture, description, condition, title, price, sold_quantity}) {

    return (
        <section className="detail" rel={id}>
            <div className="detail_left">
                <img src={picture} className="detail_product-img" alt={title} />
                <h3 className="detail_sub-title">Descripción del producto </h3>
                <p className="detail_description">
                    {description}
                </p>
            </div>
            <div className="detail_right">
                <h1 className="detail_state">{condition} - {sold_quantity} vendidos</h1>
                <h2 className="detail_title-product">{title}</h2>
                <h3 className="detail_price">$ {price}</h3>
                <a href="/" className="btns btns_primary">Comprar</a>
            </div>
        </section>
    )
}

export default Detail;
