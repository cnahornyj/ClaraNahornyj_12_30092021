import React, { Component } from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import PropTypes from "prop-types";

class Score extends Component {
  constructor(props) {
    super(props);
    /*
     * Creates a new object array with the score or todayScore key value who's a number
     * with a percentage value key who's a number in score or todayScore key value 
     * and a fill value key with a string who's a hexadecimal color value
     * *
     * @param {Number} score || todayScore
     * @return {Object} this.data
     */
    this.data = [
      {
        percentage: this.props.data.score
          ? this.props.data.score * 100
          : this.props.data.todayScore * 100,
        fill: "#FF0000",
      },
    ];
  }
  render() {
    return (
      <section className="score">
        <h2 className="score-title-text">Score</h2>
        <p className="score-text">
          {this.data[0].percentage}%
          <br />
          <span className="score-text-desc">de votre objectif</span>
        </p>
        <div className="inner-circle"></div>
        <RadialBarChart
          barGap="10%"
          barSize={20}
          cy="55%"
          data={this.data}
          endAngle={450}
          height={500}
          innerRadius="70%"
          margin={{
            bottom: 10,
            left: 10,
            right: 10,
            top: 10,
          }}
          startAngle={90}
          width={700}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar background dataKey="percentage" legendType="circle" />
        </RadialBarChart>
      </section>
    );
  }
}

Score.propTypes = {
  data: PropTypes.object,
};

export default Score;
