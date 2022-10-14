import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllPatients } from "./state/patientsSlice";
import { PATIENTS } from "../types";
import { Typography } from "@mui/material";

import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Patients() {
  const dispatch = useDispatch();
  const patients = useSelector(selectAllPatients);
  const patientStatus = useSelector((state) => state.patients.status);

  useEffect(() => {
    if (patientStatus === "idle") {
      dispatch({ type: PATIENTS.GET_PATIENTS });
    }
  }, [patientStatus, dispatch]);

  const renderPatients = () => {
    patients.map((patient) => {
      console.log(patient);
    });
  };

  return (
    <Container fixed>
      {renderPatients()}
      <Typography variant="h3">Patients</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First name</TableCell>
              <TableCell align="right">last name</TableCell>
              <TableCell align="right">age</TableCell>
              <TableCell align="right">date of birth</TableCell>
              <TableCell align="right">gender</TableCell>
              <TableCell align="right">country</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.firstName}
                </TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.dateOfBirth}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell align="right">{row.countryOfOrigin}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Patients;
