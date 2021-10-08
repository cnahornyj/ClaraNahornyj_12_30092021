import React, { Component } from "react";
import "../styles/SessionDuration.css";
import {LineChart, XAxis, Tooltip, Line} from "recharts";

const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]

const USER_AVERAGE_SESSIONS = [
  {
      userId: 12,
      sessions: [
          {
              day: 1,
              sessionLength: 30
          },
          {
              day: 2,
              sessionLength: 23
          },
          {
              day: 3,
              sessionLength: 45
          },
          {
              day: 4,
              sessionLength: 50
          },
          {
              day: 5,
              sessionLength: 0
          },
          {
              day: 6,
              sessionLength: 0
          },
          {
              day: 7,
              sessionLength: 60
          }
      ]
  }
]

// extraire this.data.sessions
// appliquer une méthode pour remplacer les dates par L,M,M etc
// propsTypes array
// utiliser les params pour trouver l'id

class SessionDuration extends Component {
  render() {
    return (
      <section className="sessionDuration">
        <h2>Durée moyenne des sessions</h2>
        <LineChart
          width={250}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" stroke="#FFF"/>
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke="#ccc" />
        </LineChart>
      </section>
    );
  }
}

export default SessionDuration;
