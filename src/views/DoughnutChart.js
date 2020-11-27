import React from "react";
import { Doughnut } from "@reactchartjs/react-chart.js";
import { makeStyles } from "@material-ui/core";
import Title from "./Title";
import Chip from "@material-ui/core/Chip";

const storageReclamos = localStorage.getItem("reclamos");
const reclamos = JSON.parse(storageReclamos);

const storageDemandas = localStorage.getItem("demandas");
const demandas = JSON.parse(storageDemandas);
const casos = demandas && demandas.length > 0 && demandas.concat(reclamos);

const getCountries = (pais) =>
  (casos && casos.filter((caso) => caso.pais === pais)) || [];

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
  },
  redChip: {
    backgroundColor: "#E9024C",
    color: "#fff",
  },
  yellowChip: {
    backgroundColor: "#F8E71B",
    color: "#fff",
  },
}));

const data = {
  labels: ["Colombia", "Chile", "Perú", "Argentina"],
  datasets: [
    {
      label: "Materias",
      data: [
        getCountries("Colombia").length + 10,
        getCountries("Chile").length + 10,
        getCountries("Perú").length + 5,
        getCountries("Argentina").length + 5,
      ],
      backgroundColor: ["#0047BA", "#E9024C", "#77BC20", "#99999A"],
      borderColor: ["#0047BA", "#E9024C", "#77BC20", "#99999A"],
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

const GeneralPie = () => {
  const classes = useStyles();
  return (
    <>
      <Title>Casos totales por país </Title>
      <p>
        Chile: <Chip label="URGENTE" className={classes.redChip} />
      </p>
      <p>
        Argentina: <Chip label="OPTIMO" color="primary" />
      </p>
      <p>
        Colombia:{" "}
        <Chip label="REVISAR" color="primary" className={classes.yellowChip} />
      </p>
      <p>
        Perú: <Chip label="OPTIMO" color="primary" />
      </p>

      <div className={`chart-container ${classes.wrapper}`}>
        <Doughnut data={data} options={options} />
      </div>
    </>
  );
};

export default GeneralPie;
