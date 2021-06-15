import React, {Component} from 'react';
import History from "./history";
import axios from "axios";


class Breadcrumb extends Component {
    render(){
        const itemLoop = this.props.param.map((res, i) => {
            return  <li key={i}>{res} <span className="breadcrumbs_add-on">></span></li>
        });
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
