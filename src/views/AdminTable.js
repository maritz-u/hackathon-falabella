import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

const storageReclamos = localStorage.getItem("reclamos");
const reclamos = storageReclamos ? JSON.parse(storageReclamos) : [];

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function AdminTable() {
  return (
    <React.Fragment>
      <Title>Reclamos reportados</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Reportado por</TableCell>
            <TableCell>fecha</TableCell>
            <TableCell>medio</TableCell>
            <TableCell>materia</TableCell>
            <TableCell>interiorLocal</TableCell>
            <TableCell>tipoAccidente</TableCell>
            <TableCell>lesion</TableCell>
            <TableCell>monto</TableCell>
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
              <TableCell>{reclamo.monto}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
