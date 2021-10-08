import React, { Component } from "react";
import "../styles/HelloUser.css"
import PropTypes from "prop-types";

class HelloUser extends Component {
  render() {
    return (
      <article className="helloUser">
        <h1>Bonjour <span>{this.props.firstname}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </article>
    );
  }
}

HelloUser.propTypes = {
  firstname: PropTypes.string,
};

export default HelloUser;

// extraire this.data.userInfos.firstName
// propsTypes array
// utiliser les params pour trouver l'id
