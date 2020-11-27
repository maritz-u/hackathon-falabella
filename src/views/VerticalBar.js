import React from "react";
import { Bar } from "@reactchartjs/react-chart.js";
import { makeStyles } from "@material-ui/core";
import Title from "./Title";
import Chip from "@material-ui/core/Chip";

const storageReclamos = localStorage.getItem("reclamos");
const reclamos = JSON.parse(storageReclamos);

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
  },
}));

const getMaterias = (materia) =>
  (reclamos && reclamos.filter((reclamo) => reclamo.materia === materia)) || [];

const data = {
  labels: [
    "Accidente",
    "Uso del estacionamiento",
    "Despacho del producto",
    "Publicidad Engañosa",
  ],
  datasets: [
    {
      label: "Materias",
      data: [
        getMaterias("Accidente").length,
        getMaterias("Uso del estacionamiento").length,
        getMaterias("Despacho del producto").length,
        getMaterias("Publicidad").length,
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

const VerticalBar = () => {
  const classes = useStyles();
  return (
    <>
      <Title>Indicadores: Casos totales por materia</Title>
      <div className={`chart-container ${classes.wrapper}`}>
        <Bar data={data} options={options} />
      </div>
    </>
  );
};

export default VerticalBar;
