import React, { useState } from 'react';
import History from "../Components/history"

//Images
import logo from "../Assets/Img/logo.png";
import SearchIcon from "../Assets/Img/search.png";


const Search = () => {

    const [language, setLanguage] = useState('');
    const [input, setInput] = useState('');


    /*submit de formulario con envio de parametros*/
    const submitAction = (e) => {
        /*prevenir evento submit*/
        e.preventDefault();
        setLanguage(input);
        /*agregar la url al historial*/
        History.push('/items?search=' + input);
        History.go(0)
        /*Limpiar el input*/
        setInput('');
    };

    return (
            <section className="search_component">
                <div className="search-box">
                    <header className="search-box_header">
                        <a className="search-box_link"  href="/" rel="Mercadolibre">
                            <img src={logo} className="search-box_logo" alt="Mercadolibre" />
                        </a>
                            <form onSubmit={submitAction} className="search-box_input_box">
                                <input className="search-box_input_search" value={input} onChange={(e) => setInput(e.target.value)}  type="text" placeholder="Nunca dejes de buscar"/>
                                <button type="submit" className="search-box_button">
                                    <img src={SearchIcon} className="search-box_icon_btn" alt="Search" />
                                </button>
                            </form>
                    </header>
                </div>
            </section>
    );
};

export default Search;
