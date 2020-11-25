import React from "react";
import { Bar } from "@reactchartjs/react-chart.js";
import { makeStyles } from "@material-ui/core";
import Title from "./Title";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
    // height: "40vh",
    width: "80vw",
  },
}));

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [19, 19, 19, 19, 20],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const VerticalBar = () => {
  const classes = useStyles();
  return (
    <>
      <Title>Indicadores</Title>
      <div
        className={`chart-container ${classes.wrapper}`}
        styles={"position: relative; height:40vh; width:80vw"}
      >
        <Bar data={data} options={options} />
      </div>
    </>
  );
};

export default VerticalBar;
