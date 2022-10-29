import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 1, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 5, 9.0, 37, 4.3),
  createData('Eclair', 20, 16.0, 24, 6.0),
  createData('Cupcake', 3, 3.7, 67, 4.3),
  createData('Gingerbread', 8, 16.0, 49, 3.9),
];
const MyProductTable = styled.div`
    width: 700px;
`

export const TableProduct = () => {
  return (
    <MyProductTable>
        <TableContainer component={Paper} sx={{
            boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset", 
            border: "20px"
    }}>
        <Table sx={{ minWidth: 700 }} aria-label="simple table">
            <TableHead >
            <TableRow>
                <TableCell align="center">Nombre</TableCell>
                <TableCell align="center">Vencimiento</TableCell>
                <TableCell align="center">Cantidad&nbsp;(u)</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell align='center'>
                    {row.name}
                </TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
</MyProductTable>
  );
}