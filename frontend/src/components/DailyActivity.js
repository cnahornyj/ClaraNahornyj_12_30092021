import React, { Component } from "react";
import "../styles/DailyActivity.css";
import {
  BarChart,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";
import PropTypes from "prop-types";

const CustomToolTip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="custom-tooltip-text">{`${payload[0].value}kg`}</p>
        <p className="custom-tooltip-text">{`${payload[1].value}kCal`}</p>
      </div>
    );
  }
  return null;
};

class DailyActivity extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
    /*
     * Creates a new object array from the existing object array
     * with a new key value number which corresponds for each object
     * to its index number +1 in the object array
     * *
     * @param {Object} weekDay
     * @return {Object} this.newData
     */
    this.newData = this.data.map((weekDay) => ({
      number: this.data.indexOf(weekDay) + 1,
      ...weekDay,
    }));
  }
  render() {
    return (
      <article className="dailyActivity">
        <h2>Activité quotidienne</h2>
        <BarChart width={730} height={250} data={this.newData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="number" />
          <YAxis orientation="right" tickCount={3} />
          <Tooltip content={<CustomToolTip />} position={{ y: 50 }} />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize="10"
          />
          <Bar
            name="Poids (kg)"
            dataKey="kilogram"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
            barSize={10}
            barGap={5}
          />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
            barSize={10}
            barGap={5}
          />
        </BarChart>
      </article>
    );
  }
}

DailyActivity.propTypes = {
  newData: PropTypes.array,
};

export default DailyActivity;
