import { dataJson } from "./data.js";

var xValues = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
var yValues = dataJson.map(obj => {
    return obj.amount;
});
var barColors = "orange";

new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [
            {
                backgroundColor: barColors,
                data: yValues,
            },
        ],
    },
    options: {
        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: false,
                    },
                },
            ],
            yAxes: [
                {
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        display: false,
                    },
                },
            ],
        },
        legend: { display: false },
        title: {
            display: false,
            text: "Spending - Last 7 days",
        },
    },
});
