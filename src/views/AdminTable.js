import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

const storageReclamos = localStorage.getItem("reclamos");
const reclamos = storageReclamos ? JSON.parse(storageReclamos) : [];

export default function AdminTable() {
  return (
    <React.Fragment>
      <Title>Reclamos reportados</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Reportado por</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>Medio</TableCell>
            <TableCell>Materia</TableCell>
            <TableCell>Interior Local</TableCell>
            <TableCell>Tipo Accidente</TableCell>
            <TableCell>Lesión</TableCell>
            <TableCell>Monto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reclamos.map((reclamo) => (
            <TableRow>
              <TableCell>{reclamo.usuario}</TableCell>
              <TableCell>{reclamo.fecha}</TableCell>
              <TableCell>{reclamo.medio}</TableCell>
              <TableCell>{reclamo.materia}</TableCell>
              <TableCell>{reclamo.interiorLocal}</TableCell>
              <TableCell>{reclamo.tipoAccidente}</TableCell>
              <TableCell>{reclamo.lesion}</TableCell>
              <TableCell>{reclamo.monto} CLP</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
