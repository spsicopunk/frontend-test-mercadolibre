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
            productItem: [],
            miga: []
        }
    }

    componentWillMount() {
        const param = History.location.search.substring(8);
        const url = `https://node-express-mercadolibre.herokuapp.com/api/items?${param}`;
        console.log(url)
        axios.get(url).then(response => {
            console.log(response.data.products[0].item)
            this.setState({
                productItem: response.data.products[0].item,
                miga: response.data.products[0].categories
            });
        })

    }

    render(){
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
                <Breadcrumb param={this.state.miga}></Breadcrumb>
                <div className="products">
                    {itemLoop}
                </div>
            </div>
        )
    }
}

export default Results;
