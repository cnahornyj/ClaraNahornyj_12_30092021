import React, { Component } from "react";
import PropTypes from "prop-types";

class HelloUser extends Component {
  render() {
    return (
      <article className="helloUser">
        <h1>Bonjour {this.props.firstname}</h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </article>
    );
  }
}

HelloUser.propTypes = {
  firstname: PropTypes.string,
};

export default HelloUser;
