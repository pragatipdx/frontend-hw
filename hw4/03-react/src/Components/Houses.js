import React, { Component } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";

class Houses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labels: [],
      datasets: [
        {
          backgroundColor: [
            "rgba(54, 162, 235, 0.8)",
            "rgba(255, 206, 86, 0.8)",
            "rgba(255, 99, 132, 0.8)",
            "rgba(75, 192, 192, 0.8)",
            "rgba(153, 102, 255, 0.8)",
            "rgba(255, 159, 64, 0.8)",
            "rgba(199, 199, 199, 0.8)",
            "rgba(83, 102, 255, 0.8)",
            "rgba(40, 159, 64, 0.8)",
            "rgba(210, 199, 199, 0.8)",
          ],
          borderColor: [
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(159, 159, 159, 1)",
            "rgba(83, 102, 255, 1)",
            "rgba(40, 159, 64, 1)",
            "rgba(210, 199, 199, 1)",
          ],
          data: [],
        },
      ],
    };
    this.options = {
      legend: {
        display: true,
        position: "bottom",
      },
    };
  }

  donutChart = (data) => {
    let arr = [];
    data.forEach((element) => {
      let family = element.family;
      if (
        family === "None" || family === "" || family === "Unknown" || family === "Free Folk") {
        family = "None";
      } else if (family.indexOf("House") !== 0) {
        family = "House " + family;
      }
      if (family === "House Lanister") {
        family = "House Lannister";
      }
      arr.push(family);
    });

    let mapReduce = arr.reduce((map, val) => {
      map.hasOwnProperty(val) ? map[val]++ : (map[val] = 1);
      return map;
    }, {});

    let labels = [];
    let count = [];

    for (const property in mapReduce) {
      if (mapReduce[property] >= 2) {
        labels.push(property);
        count.push(mapReduce[property]);
      }
    }

    let items = { ...this.state };
    items.labels = labels;
    items.datasets[0].data = count;

    this.setState(items);
  };

  componentDidMount() {
    let url = "https://thronesapi.com/api/v2/Characters";
    axios
      .get(url)
      .then((res) => {
        let data = res.data;
        this.donutChart(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light justify-content-between">
          <div className="navbar-brand">Houses</div>
        </nav>
        <div className="container-md border rounded bg-light houses-container">
          <Doughnut data={this.state} options={this.options} width={"2%"} />
        </div>
      </div>
    );
  }
}

export default Houses;
