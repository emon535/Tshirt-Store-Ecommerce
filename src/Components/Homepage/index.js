import React, { Component } from 'react';
import TopBar from './../TopBar';
import Footer from '../Footer';


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

                <Footer message="Copyright@ Foysal Ahmed Emon" />
            </React.Fragment>
        )
    }
}


export default Homepage;