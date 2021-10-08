import React, { Component } from "react";
import PropTypes from "prop-types";

class InformationCards extends Component {
  render() {
    return (
      <section className="informationCards">
          <article>
            <img src={this.props.icon} alt="icon" />
          </article>
          <article className="infos">
            <p>
              {this.props.count}
              {this.props.unit}
            </p>
            <p>{this.props.fullUnit}</p>
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
