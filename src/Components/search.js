import React from "react";

//Images
import logo from "../Assets/Img/logo.png";
import SearchIcon from "../Assets/Img/search.png";

function Search() {
    return (
        <section className="search_component">
            <div className="search-box">
                <header className="search-box_header">
                    <a className="search-box_link"  href="/" rel="Mercadolibre">
                        <img src={logo} className="search-box_logo" alt="Mercadolibre" />
                    </a>
                    <div className="search-box_input_box">
                        <input className="search-box_input_search" type="text" placeholder="Nunca dejes de buscar"/>
                        <button className="search-box_button">
                            <img src={SearchIcon} className="search-box_icon_btn" alt="Search" />
                        </button>
                    </div>
                </header>
            </div>
            <div className="breadcrumbs">
                <ul className="breadcrumbs_list">
                    <li>Electronica, Audio y Video <span className="breadcrumbs_add-on">></span></li>
                    <li>iPod <span className="breadcrumbs_add-on">></span></li>
                    <li>Reproductores <span className="breadcrumbs_add-on">></span></li>
                    <li>iPod touch <span className="breadcrumbs_add-on">></span></li>
                    <li className="bread_active">32 GB</li>
                </ul>
            </div>
        </section>
    );
}

export default Search;
