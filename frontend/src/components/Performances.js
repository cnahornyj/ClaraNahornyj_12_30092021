import React, { Component } from "react";
import "../styles/Performances.css";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar
} from "recharts";

const data = [
  {
    "subject": "cardio",
    "A": 80
  },
  {
    "subject": "energy",
    "A": 120
  },
  {
    "subject": "endurance",
    "A": 140
  },
  {
    "subject": "strength",
    "A": 50
  },
  {
    "subject": "speed",
    "A": 200
  },
  {
    "subject": "intensity",
    "A": 150
  }
]
const USER_PERFORMANCE = [
  {
      userId: 12,
      kind: {
          1: 'cardio',
          2: 'energy',
          3: 'endurance',
          4: 'strength',
          5: 'speed',
          6: 'intensity'
      },
      data: [
          {
              value: 80,
              kind: 1
          },
          {
              value: 120,
              kind: 2
          },
          {
              value: 140,
              kind: 3
          },
          {
              value: 50,
              kind: 4
          },
          {
              value: 200,
              kind: 5
          },
          {
              value: 90,
              kind: 6
          }
      ]
  }
]

// extraire this.data.sessions
// appliquer une méthode pour remplacer les dates par 1,2,3 etc
// propsTypes array
// utiliser les params pour trouver l'id
 
class Performances extends Component {
  render() {
    return (
      <section className="performances">
        <RadarChart width={256} height={261} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" stroke="#fff"/>
          <Radar
            dataKey="A"
            stroke="#e60000"
            fill="#e60000"
            fillOpacity={0.6}
          />
        </RadarChart>
      </section>
    );
  }
}

export default Performances;
