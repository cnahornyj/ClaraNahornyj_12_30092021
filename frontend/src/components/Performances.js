import React, { Component } from "react";
import "../styles/Performances.css";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar
} from "recharts";

class Performances extends Component {
  constructor(props){
    super(props);
    this.data = this.props.data;
    this.newData = this.data.map((data) => {
      switch (data.kind) {
        case 1:
          return { disciplined: "cardio", ...data };
          break;
        case 2:
          return { disciplined: "energy", ...data };
          break;
        case 3:
          return { disciplined: "endurance", ...data };
          break;
        case 4:
          return { disciplined: "strength", ...data };
          break;
        case 5:
          return { disciplined: "speed", ...data };
          break;
        case 6:
          return { disciplined: "intensity", ...data };
          break;
        default:
          return { ...data };
      }
    }); 
    this.newData.forEach(function (item) {
      delete item.kind;
    });
  }
  render() {
    return (
      <section className="performances">
        <RadarChart width={256} height={261} data={this.newData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="disciplined" stroke="#fff"/>
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

export default Performances;
