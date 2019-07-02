import React, { Component } from 'react';
import DataService from '../Services/DataService/DataService';

class Products extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        let data = DataService.getRequiredData();
        console.log("get required data", data)
    }


    render() {
        return (
            <React.Fragment>
                <h1>Products</h1>

            </React.Fragment>
        )
    }
}


export default Products;