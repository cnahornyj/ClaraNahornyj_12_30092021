import React, { Component } from "react";
import "../styles/InformationCards.css";
import PropTypes from "prop-types";

class InformationCards extends Component {
  render() {
    return (
      <section className="informationCards">
          <article>
            <img src={this.props.icon} alt="icon" />
          </article>
          <article className="infos">
            <p className="number">
              {this.props.count}
              {this.props.unit}
            </p>
            <p className="unit">{this.props.fullUnit}</p>
          </article>
      </section>
    );
  }
}

InformationCards.propTypes = {
    count: PropTypes.number,
    unit: PropTypes.string,
    fullUnit: PropTypes.string
  };

export default InformationCards;
