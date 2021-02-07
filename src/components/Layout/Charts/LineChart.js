import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          foreColor: "#787BFB",
        },
        xaxis: {
          categories: [
            "Alexandria",
            "Aswan",
            "Cairo",
            "Swis",
            "Rasheed",
            "Matrooh",
            "Sinai",
          ],
        },
        fill: {
          colors: ["#787BFB"],
        },
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },

        dataLabels: {
          enabled: false,
        },
        title: {
          text: "Popularity in Egypt",
          align: "center",
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: "20px",
          },
        },
      },
      series: [
        {
          name: "Populations",
          data: [
            9532471,
            1042017,
            12528047,
            2508469,
            1002558,
            3850456,
            2047855,
          ],
        },
      ],
    };
  }

  render() {
    return (
      <>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height="440"
          width="100%"
        />
      </>
    );
  }
}
