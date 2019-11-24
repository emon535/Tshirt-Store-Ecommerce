import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p>{this.props.message}</p>
            </div>
        );
    }
}

export default Footer;
