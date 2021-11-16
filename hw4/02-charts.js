let backgroundColors = [
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
  "rgba(78, 52, 199, 0.8)",
];

let borderColors = [
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
  "rgba(78, 52, 199, 1)",
];

// URL to Game of Thrones API to fetch all characters
let url = "https://thronesapi.com/api/v2/Characters";
let array = [];
let labels = [];
let count = [];

let renderChart = async () => {
  let donutChart = document.getElementById("donut-chart");

  let res = await fetch(url);
  let data = await res.json();

  data.forEach((element) => {
    let family = element.family;
    
    family = validateNullFamily(family);
    array.push(family);
  });

  let mapReduce = array.reduce((map, val) => {
    map.hasOwnProperty(val) ? map[val]++ : (map[val] = 1);
    return map;
  }, {});

  for (const property in mapReduce) {
    if (mapReduce[property] >= 2) {
      labels.push(property);
      count.push(mapReduce[property]);
    }
  }

  new Chart(donutChart, {
    type: "doughnut",
    data: {
      labels: labels,
      datasets: [
        {
          label: "My First Dataset",
          data: count,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  });
};

renderChart();

function validateNullFamily(family) {
  if (family === "None" || family === "" || family === "Unknown" || family ==="Free Folk") {
    family = "None";
  }
  else if (family.indexOf("House") !== 0) {
    family = "House " + family;
  }
  if (family === "House Lanister") {
    family = "House Lannister";
  }  
 
  return family;
}
