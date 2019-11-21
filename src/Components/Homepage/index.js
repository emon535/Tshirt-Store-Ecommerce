import React, { Component } from 'react';
import TopBar from './../TopBar';


class Homepage extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log("get required data")
    }


    render() {
        return (
            <React.Fragment>
                <TopBar />
                <h1>Homepage</h1>

            </React.Fragment>
        )
    }
}


export default Homepage;