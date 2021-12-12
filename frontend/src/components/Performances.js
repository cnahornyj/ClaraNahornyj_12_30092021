import React, { Component } from "react";
import "../styles/Performances.css";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";
import PropTypes from "prop-types";

class Performances extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
    /*
     * Creates a new object array from the existing object array
     * with a new disciplined value key that differs for each object
     * depending on the value of its kind key
     * *
     * @param {Object} data
     * @return {Object} this.newData
     */
    this.newData = this.data.map((data) => {
      switch (data.kind) {
        case 1:
          return { disciplined: "Cardio", ...data };
          break;
        case 2:
          return { disciplined: "Energy", ...data };
          break;
        case 3:
          return { disciplined: "Endurance", ...data };
          break;
        case 4:
          return { disciplined: "Strength", ...data };
          break;
        case 5:
          return { disciplined: "Speed", ...data };
          break;
        case 6:
          return { disciplined: "Intensity", ...data };
          break;
        default:
          return { ...data };
      }
    });
    /*
     * Removes the kind value key for each object
     * *
     * @param {Object} item
     * @return {Object} this.newData
     */
    this.newData.forEach((item) => {
      delete item.kind;
    });
  }
  render() {
    return (
      <section className="performances">
        <RadarChart width={250} height={255} data={this.newData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="disciplined" stroke="#fff" tick={{fontSize: 10}}/>
          <Radar
            dataKey="value"
            stroke="#e60000"
            fill="#e60000"
            fillOpacity={0.6}
          />
        </RadarChart>
      </section>
    );
  }
}

Performances.propTypes = {
  newData: PropTypes.array,
};

export default Performances;
