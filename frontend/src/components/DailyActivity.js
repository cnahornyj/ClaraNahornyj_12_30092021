import React, { Component } from "react";
import "../styles/DailyActivity.css"
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";
import PropTypes from "prop-types";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];

// extraire this.data.sessions
// appliquer une méthode pour remplacer les dates par 1,2,3 etc
// propsTypes array
// utiliser les params pour trouver l'id

const USER_ACTIVITY = [
  {
    userId: 12,
    sessions: [
      {
        day: "2020-07-01",
        kilogram: 80,
        calories: 240,
      },
      {
        day: "2020-07-02",
        kilogram: 80,
        calories: 220,
      },
      {
        day: "2020-07-03",
        kilogram: 81,
        calories: 280,
      },
      {
        day: "2020-07-04",
        kilogram: 81,
        calories: 290,
      },
      {
        day: "2020-07-05",
        kilogram: 80,
        calories: 160,
      },
      {
        day: "2020-07-06",
        kilogram: 78,
        calories: 162,
      },
      {
        day: "2020-07-07",
        kilogram: 76,
        calories: 390,
      },
    ],
  },
];

class DailyActivity extends Component {
  render() {
    return (
      <article className="dailyActivity">
        <h2>Activité quotidienne</h2>
        <BarChart width={730} height={250} data={this.props.sessions}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="kilogram" fill="#282d30" />
          <Bar dataKey="calories" fill="#e60000" />
        </BarChart>
      </article>
    );
  }
}

DailyActivity.propTypes = {
  sessions: PropTypes.array
};

export default DailyActivity;
