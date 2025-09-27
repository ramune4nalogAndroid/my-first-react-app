import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import type { MyTableProps } from '../../App';
import InfoSwitch from '../commons/InfoSwitch';


function TaskTable({ columns, rows, showUserInfoSwitch }: MyTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={columns.length} align="center" style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
              Task Table
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={columns.length} align="center" style={{ fontStyle: 'italic', fontSize: '0.9em' }}>
              To view contact information about users associated with each task, enable the "Show User Info" option.
              <InfoSwitch 
              {...showUserInfoSwitch} />
            </TableCell>
          </TableRow>
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
          {rows.map((row) => (
            <TableRow
              key={row.task_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align}>
                  {row[column.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TaskTable;
