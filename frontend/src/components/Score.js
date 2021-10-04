import React, { Component } from "react";
import { RadialBarChart, RadialBar, Tooltip } from "recharts";

const data = [
    {
      "name": "18-24",
      "uv": 31.47,
      "pv": 2400,
      "fill": "#8884d8"
    }
  ]

class Score extends Component {
  render() {
    return (
      <section className="score">
        <RadialBarChart
          width={730}
          height={250}
          innerRadius="10%"
          outerRadius="80%"
          data={data}
          startAngle={360}
          endAngle={0}
        >
          <RadialBar
            minAngle={15}
            label={{ fill: "#666", position: "insideStart" }}
            background
            clockWise={true}
            dataKey="uv"
          />
          <Tooltip />
        </RadialBarChart>
      </section>
    );
  }
}

export default Score;
