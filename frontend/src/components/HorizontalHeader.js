import React, { Component } from 'react';
import logo from "../assets/logo.png";
import "../styles/HorizontalHeader.css";

class HorizontalHeader extends Component {
    render() {
        return (
            <header className="horizontalHeader">
                <img src={logo} alt="logo sportsee"/>
                <p>Accueil</p>
                <p>Profil</p>
                <p>Réglage</p>
                <p>Communauté</p>
            </header>
        );
    }
}

export default HorizontalHeader;