import React, { Component } from "react";
import Chart from "react-apexcharts";

class AreaChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          foreColor: "#787BFB",
        },
        xaxis: {
          categories: ["7", "8", "9", "10", "11", "12", "1"],
        },
        colors: ["#787BFB", "#F9809A"],
        title: {
          text: "Covid-19 in last 7 months",
          align: "center",
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: "20px",
          },
        },
        stroke: {
          curve: "smooth",
        },
      },
      series: [
        {
          name: "Cases",
          data: [85, 110, 125, 150, 250, 1100, 820],
        },
        {
          name: "Deaths",
          data: [10, 15, 20, 30, 40, 60, 55],
        },
      ],
    };
  }

  render() {
    return (
      <div className="mixed-chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          width="100%"
          height="400"
        />
      </div>
    );
  }
}

export default AreaChart;
