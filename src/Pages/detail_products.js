import React, {Component} from 'react';
import Search from "../Components/search";
import Detail from "../Components/detail";
import History from "../Components/history";
import axios from "axios";
import Breadcrumb from "../Components/breadcrumb";

class DetailProduct extends Component {
    constructor() {
        super();
        this.state = {
            description: [],
            price: []
        }
    }

    componentWillMount() {
        const param = History.location.pathname;
        console.log(param)
        const url = `https://node-express-mercadolibre.herokuapp.com/api${param}`;
        axios.get(url).then(response => {
            /*console.log(response.data)*/
            this.setState({
                description: response.data.description.item,
                price: response.data.description.item.price
            });
        })
    }

    render(){
        return (
            <div className="detail-product">
                <Search />
                <Breadcrumb param={[this.state.description.title]}></Breadcrumb>
                <Detail
                    id={this.state.description.id}
                    picture={this.state.description.picture}
                    description={this.state.description.description}
                    condition={this.state.description.condition}
                    title={this.state.description.title}
                    price={this.state.price.amount}
                    sold_quantity={this.state.description.sold_quantity}
                />
            </div>
        )
    }
}


export default DetailProduct;
