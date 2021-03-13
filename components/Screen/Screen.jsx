import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Paper,Table,TableBody,TableRow,TableHead ,TableContainer,TableCell } from '@material-ui/core';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'rgb(62, 148, 228)',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, author, date) {
  return { name, author, date };
}

const rows = [
  createData('About Us', "ClaytonBrown", "12/03/2021"),
  createData('Blog',  "ClaytonBrown", "20/04/2020"),
  createData('Celebrate Recovery',  "ClaytonBrown", "15/11/2022"),
  createData('Christmas Eve Candle Light Services',  "ClaytonBrown",  "22/11/2019"),
  createData('Church Location',   "ClaytonBrown", "01/10/2018"),
  createData('Connect',  "ClaytonBrown", "25/12/2021"),

];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Screen() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
      <TableHead className={classes.head}>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="right">Author</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
             <StyledTableCell align="right">{row.author}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
