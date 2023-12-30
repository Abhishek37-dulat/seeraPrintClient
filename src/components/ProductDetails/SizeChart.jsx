import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, styled } from "@mui/material";

const MainBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  marginTop: "10px",
  padding: "10px",
  // [theme.breakpoints.down("msm")]: {
  //   flexDirection: "column-reverse",
  // },
}));

function createData(name, s, m, l, xl, xxl) {
  return { name, s, m, l, xl, xxl };
}

const rows = [
  createData("Size (in/cm)", 159, 6.0, 24, 4.0, 3),
  createData("Full Chest (in/cm)", 237, 9.0, 37, 4.3, 23),
  createData("Length (in/cm)", 262, 16.0, 24, 6.0, 23),
  createData("Across Shoulder (in/cm)", 305, 3.7, 67, 4.3, 4),
  createData("Sleeve Length (in/cm)", 356, 16.0, 49, 3.9, 5),
  createData("Tolerance", 356, 16.0, 49, 3.9, 6),
];

export default function SizeChart() {
  return (
    <MainBox>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ fontWeight: "600" }}>
              <TableCell>Brand Size</TableCell>
              <TableCell align="right">S</TableCell>
              <TableCell align="right">M</TableCell>
              <TableCell align="right">L</TableCell>
              <TableCell align="right">XL</TableCell>
              <TableCell align="right">2XL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.s}</TableCell>
                <TableCell align="right">{row.m}</TableCell>
                <TableCell align="right">{row.l}</TableCell>
                <TableCell align="right">{row.xl}</TableCell>
                <TableCell align="right">{row.xxl}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainBox>
  );
}
