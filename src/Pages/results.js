import React, {Component} from 'react';

//components
import Items from "../Components/items"
import Search from "../Components/search"
import History from "../Components/history";

/* Api axios */
import axios from "axios";
import Breadcrumb from "../Components/breadcrumb";


class Results extends Component {

    constructor() {
        super();
        this.state = {
            productItem: []
        }
    }

    componentWillMount() {
        const param = History.location.search.substring(3);
        const url = `http://localhost:4000/api/items?q=${param}`;
        axios.get(url).then(response => {
            this.setState({
                productItem: response.data.products[0].item
            });

        })
    }

    render(){
        const param = History.location.search.substring(3);
        var itemLoop = this.state.productItem.map((res, i) => {
        return  <Items
                    key={i}
                    id={res.id}
                    picture={res.picture}
                    title={res.title}
                    price={res.price.amount}
                    free_shipping={res.free_shipping}
                    condition={res.condition}
                />
        });
        return (
            <div className="results">
                <Search />
                <Breadcrumb param={param}></Breadcrumb>
                <div className="products">
                    {itemLoop}
                </div>
            </div>
        )
    }
}

export default Results;
