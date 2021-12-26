import React, { Component } from "react";
import "../styles/SessionDuration.css";
import { LineChart, XAxis, Tooltip, Line } from "recharts";
import PropTypes from "prop-types";

const CustomToolTip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div>
        <p>{`${payload[0].value} min`}</p>
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
     * Creates a new object array from the existing object array
     * with a new dayName value key that differs for each object
     * depending on the value of its day key
     * *
     * @param {Object} weekday
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
     * Removes the day value key for each object
     * *
     * @param {Object} item
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
          width={258}
          height={200}
          data={this.newData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis
            dataKey="dayName"
            stroke="#FFF"
            axisLine={false}
            tickLine={false}
            tick={{fontSize: 12}}
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
