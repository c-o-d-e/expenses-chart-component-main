import { dataJson } from "./data.js";

var xValues = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
var yValues = dataJson.map(obj => {
    return obj.amount;
});
var barColors = "#ec755d";

const tooltip = {
    displayColors: false,
    callbacks: {
        label: function (context) {
            return yValues[xValues.indexOf(context.label)];
        },
        title: function (context) {
            return;
        },
    },
};

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
        // Changes the mouse cursor to a pointer
        onHover: (event, chartElement) => {
            event.native.target.style.cursor =
                chartElement.length == 1 ? "pointer" : "default";
        },
        tooltip,
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
            tooltip,
            legend: { display: false },
            title: {
                display: false,
                text: "Spending - Last 7 days",
            },
        },
    },
});
