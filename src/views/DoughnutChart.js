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

console.log("LALALA12", casos);
const getCountries = (pais) =>
  (casos && casos.filter((caso) => caso.pais === pais)) || [];

console.log("TEST", getCountries("Colombia"));

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
  },
  redChip: {
    backgroundColor: "#E9024C",
    color: "#fff",
  },
}));

const data = {
  labels: ["Colombia", "Chile", "Perú", "Argentina"],
  datasets: [
    {
      label: "Materias",
      data: [
        getCountries("Colombia").length,
        getCountries("Chile").length,
        getCountries("Perú").length,
        getCountries("Argentina").length,
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
        Colombia: <Chip label="OPTIMO" color="primary" />
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
