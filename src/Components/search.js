import React, { useState } from 'react';
import History from "../Components/history"

//Images
import logo from "../Assets/Img/logo.png";
import SearchIcon from "../Assets/Img/search.png";

const Search = ({ location }) => {

    const [language, setLanguage] = useState('');
    const [input, setInput] = useState('');


    // function for handling form submit
    const submitAction = (e) => {
        // prevents default, so page won't reload on form submit
        e.preventDefault();
        // set language in state
        setLanguage(input);
        // add query string to URL

        History.push('/items?search=' + input);
        History.go(0)
        // clear the input
        setInput('');
    };

    return (
        <>
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
                <div className="breadcrumbs">
                    <ul className="breadcrumbs_list">
                        <li>Electronica, Audio y Video <span className="breadcrumbs_add-on">></span></li>
                        <li>iPod <span className="breadcrumbs_add-on">></span></li>
                        <li>Reproductores <span className="breadcrumbs_add-on">></span></li>
                        <li>iPod touch <span className="breadcrumbs_add-on">></span></li>
                        <li className="bread_active">{language}</li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Search;
