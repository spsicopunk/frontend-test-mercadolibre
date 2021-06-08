import React from 'react';

//components
import Items from "../Components/items"
import Search from "../Components/search"


class Home extends React.Component {
    render(){
        return (
            <div className="home">
                <Search />
                <Items />
            </div>
        )
    }
}

export default Home;



