import React, { Component } from 'react';
import "../styles/VerticalHeader.css";
import zen from "../assets/zen.png";
import swim from "../assets/swim.png";
import bike from "../assets/bike.png";
import alters from "../assets/alters.png";

class VerticalHeader extends Component {
    render() {
        return (
            <header className="verticalHeader">
                <img src={zen} alt="zen icon"/>
                <img src={swim} alt="swim icon"/>
                <img src={bike} alt="bike icon"/>
                <img src={alters} alt="alters icon"/>
                <p>Copyright, SportSee 2020</p>
            </header>
        );
    }
}

export default VerticalHeader;