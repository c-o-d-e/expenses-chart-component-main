import { dataJson } from "./data.js";

var xValues = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
var yValues = dataJson.map(obj => {
    return obj.amount;
});
var barColors = "#ec755d";

new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [
            {
                backgroundColor: barColors,
                data: yValues,
                borderRadius: 5,
                hoverRadius: 5,
                hoverBackgroundColor: "#76b5bc",
            },
        ],
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: { display: false },
            title: {
                display: false,
                text: "Spending - Last 7 days",
            },
        },
    },
});
