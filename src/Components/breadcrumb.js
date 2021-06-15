import React, {Component} from 'react';
import History from "./history";
import axios from "axios";


class Breadcrumb extends Component {

    constructor() {
        super();
        this.state = {
            categories: []
        }
    }
    componentWillMount() {
        const param = History.location.search.substring(3);
        const url = `http://localhost:4000/api/items?q=${this.props.param}`;
        console.log(url)
        axios.get(url).then(response => {
            console.log(response)
            this.setState({
                categories: response.data.products[0].categories
            });
            console.log(response.data.products[0].categories)
        })
    }
    render(){

        const itemLoop = this.state.categories.map((res, i) => {
            return  <li key={i}>{res} <span className="breadcrumbs_add-on">></span></li>
        });
        var param = History.location.search.substring(8);

        return (
            <section className="breadcrumbs">
                <ul className="breadcrumbs_list">
                    {itemLoop}
                </ul>
            </section>
        )
    }

};

export default Breadcrumb;
