import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

const storeageDemandas = localStorage.getItem("demandas");
const demandas = storeageDemandas ? JSON.parse(storeageDemandas) : [];

console.log("Cargando el localStorage...");
const AdminTableDemand = () => {
  return (
    <React.Fragment>
      <Title>Reclamos reportados</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Reportado por</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>Materia</TableCell>
            <TableCell>Demandado</TableCell>
            <TableCell>Local</TableCell>
            <TableCell>Pais</TableCell>
            <TableCell>Abogado encargado</TableCell>
            <TableCell>Resumen</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demandas.map((demanda) => (
            <TableRow>
              <TableCell>{demanda.usuarioReporta}</TableCell>
              <TableCell>{demanda.fecha}</TableCell>
              <TableCell>{demanda.materia}</TableCell>
              <TableCell>{demanda.demandado}</TableCell>
              <TableCell>{demanda.local}</TableCell>
              <TableCell>{demanda.pais}</TableCell>
              <TableCell>{demanda.abogadoEncargado}</TableCell>
              <TableCell>{demanda.resumen} CLP</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};

export default AdminTableDemand;
