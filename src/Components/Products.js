import React, { Component } from 'react';

class Products extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log("get required data")
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