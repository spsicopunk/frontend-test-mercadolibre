import React from 'react';

//components
import Items from "../Components/items"
import Search from "../Components/search"


class Results extends React.Component {
    render(){
        return (
            <div className="results">
                <Search />
                <Items />
            </div>
        )
    }
}

export default Results;
