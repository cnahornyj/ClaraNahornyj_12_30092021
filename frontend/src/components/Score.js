import React, { Component } from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

const data = [{ name: "L1", value: 25 }];

const circleSize = 350;

class Score extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.data * 100;
    //console.log(this.data);
    let newData = [];
    let obj = {value:this.data};
    newData.push(obj);
    console.log(newData); 
  }
  render() {
    return (
      <section className="score">
        <RadialBarChart
          width={circleSize}
          height={circleSize}
          innerRadius={12}
          outerRadius={18}
          barSize={2}
          data={this.newData}
          startAngle={180}
          endAngle={-270}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background
            clockWise
            dataKey="value"
            cornerRadius={circleSize / 2}
            fill="#82ca9d"
          />
          <text
            x={circleSize / 2}
            y={circleSize / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
          >
            25
          </text>
        </RadialBarChart>
      </section>
    );
  }
}

export default Score;
