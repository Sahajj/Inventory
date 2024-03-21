import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import { List } from "../Pages/ShopDashboard"

interface Column {
  id: 'name' | 'OwnerName' | 'email' | 'phone' | 'description' | 'Action';
  label: string;
  minWidth?: number;
  align?: 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 100, align: 'center' },
  { id: 'OwnerName', label: 'Owner Name', minWidth: 100, align: 'center' },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'phone',
    label: 'Phone Number',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'description',
    label: 'Description',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'Action',
    label: 'Action',
    minWidth: 70,
    align: 'center',
  },
];


export default function ProductTable({ rows, onDelete, onUpdate, onProduct }: { rows: List[],onDelete: (item: List) => void, onUpdate: (item: List) => void , onProduct: (item: List) => void }  ) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDeleteClick = (row : List) => {
    onDelete(row);
  }

  const handleUpdateClick = (row : List) => {
    onUpdate(row);
  }
  const handleProductRequest = (row : List) => {
    onProduct(row)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 700 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      // IF the current column is the action column, render buttons
                      if (column.id == "Action") {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <span>
                              <Tooltip title="Delete" >
                                <IconButton onClick={() => handleDeleteClick(row)} >
                                  <DeleteIcon />
                                </IconButton>
                              </Tooltip>
                              <Tooltip title="Edit">
                                <IconButton onClick={() => handleUpdateClick(row)} >
                                  <EditIcon />
                                </IconButton>
                              </Tooltip>
                              <Tooltip title="Product Page">
                                <IconButton onClick={() => handleProductRequest(row)} >
                                  <MenuOpenIcon />
                                </IconButton>
                              </Tooltip>
                            </span>
                          </TableCell>
                        )
                      } else {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value
                            }
                          </TableCell>
                        );
                      }
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper >
  );
}