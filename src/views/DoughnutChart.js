import React from "react";
import { Doughnut } from "@reactchartjs/react-chart.js";
import { makeStyles } from "@material-ui/core";
import Title from "./Title";

const storageReclamos = localStorage.getItem("reclamos");
const reclamos = JSON.parse(storageReclamos);

const storageDemandas = localStorage.getItem("demandas");
const demandas = JSON.parse(storageDemandas);

const casos = demandas.concat(reclamos);

const getCountries = (materia) =>
  (casos && casos.filter((reclamo) => reclamo.materia === materia)) || [];

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
  },
}));

const data = {
  labels: ["Colombia", "Chile", "Perú", "Argentina"],
  datasets: [
    {
      label: "Materias",
      data: [
        (demandas && demandas.length) || 0,
        30,
        (reclamos && reclamos.length) || 0,
      ],
      backgroundColor: ["#0047BA", "#E9024C", "#77BC20"],
      borderColor: ["#0047BA", "#E9024C", "#77BC20"],
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
      {/*<p>*/}
      {/*  consulta: <Chip label="URGENTE" />{" "}*/}
      {/*</p>*/}
      {/*<p>*/}
      {/*  Reclamo: <Chip label="OPTIMO" />{" "}*/}
      {/*</p>*/}
      {/*<p>*/}
      {/*  demanda: <Chip label="OPTIMO" color="primary" />*/}
      {/*</p>*/}

      <div className={`chart-container ${classes.wrapper}`}>
        <Doughnut data={data} options={options} />
      </div>
    </>
  );
};

export default GeneralPie;
