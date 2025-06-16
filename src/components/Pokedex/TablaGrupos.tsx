import { useState, FC } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { types } from "util";
import {PokemonData } from './../../../src/type';


type PokeDataParams = {
    Pokedata: {
        name: string;
        height: number;
        weight: number;
    },
    Data: PokemonData[];
}

const TableGrupo: FC<PokeDataParams>= ({
    Pokedata,
    Data
  }) => {

  function createData(
    name: string,
    height: number,
    weight: number,
    
  ) {
    return { name, height, weight};
  }

    const rows: PokemonData[] = Data.map(x => ({
      name: x.name,
      height: x.height,
      weight: x.weight,
    }));


  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Altura</TableCell>
              <TableCell align="right">Peso</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.height}</TableCell>
                <TableCell align="right">{row.weight}</TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </>
  );
}

export default TableGrupo;