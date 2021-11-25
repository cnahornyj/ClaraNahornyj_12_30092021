import React, { Component } from "react";
import "../styles/SessionDuration.css";
import { LineChart, XAxis, Tooltip, Line } from "recharts";
import PropTypes from "prop-types";

const CustomToolTip = ({ active, payload }) => {
  // A COMMENTER
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip-average">
        <p className="custom-tooltip-average-text">{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

class SessionDuration extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
    /*
     * Crée un nouvel objet à partir de l'objet existant
     * avec une nouvelle clé valeur dayName qui diffère pour chaque élément
     * selon la valeur de sa clé day
     * *
     * @param {Object} this.data
     * * OR
     * @param {Object} weekday ?
     * @return {Object} this.newData
     */
    this.newData = this.data.map((weekDay) => {
      switch (weekDay.day) {
        case 1:
          return { dayName: "L", ...weekDay };
          break;
        case 2:
          return { dayName: "M", ...weekDay };
          break;
        case 3:
          return { dayName: "M", ...weekDay };
          break;
        case 4:
          return { dayName: "J", ...weekDay };
          break;
        case 5:
          return { dayName: "V", ...weekDay };
          break;
        case 6:
          return { dayName: "S", ...weekDay };
          break;
        case 7:
          return { dayName: "D", ...weekDay };
          break;
        default:
          return { ...weekDay };
      }
    });
    /*
     * Supprime la clé valeur day pour chaque élément
     * *
     * @param {Object} this.newData
     * @return {Object} this.newData
     */
    this.newData.forEach((item) => {
      delete item.day;
    });
  }
  render() {
    return (
      <section className="sessionDuration">
        <h2>Durée moyenne des sessions</h2>
        <LineChart
          width={250}
          height={250}
          data={this.newData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis
            dataKey="dayName"
            stroke="#FFF"
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomToolTip />} position={{ y: 60 }} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#ccc"
            dot={false}
          />
        </LineChart>
      </section>
    );
  }
}

SessionDuration.propTypes = {
  newData: PropTypes.array,
};

export default SessionDuration;
