import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, TableContainer, Typography, Divider } from '@mui/material';
import { styled } from '@mui/system';

const StyledTableCell = styled(TableCell)({
  fontWeight: 'bold',
  backgroundColor: '#f5f5f5',
});

const StyledTableRow = styled(TableRow)({
  '&:nth-of-type(even)': {
    backgroundColor: '#fafafa',
  },
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
});

const TaskList = ({ tasks }) => {

  return (
    <Paper style={{ padding: 16 }}>
      <Typography variant="h6" gutterBottom className='!ml-2 !mt-10 !font-semibold'>
        Task List
      </Typography>
      <Divider style={{ marginBottom: 16 }} />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell>Priority</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks?.length > 0 && tasks?.map((task) => (
              <StyledTableRow key={task?._id}>
                <TableCell>{task?.title}</TableCell>
                <TableCell>{task?.description}</TableCell>
                <TableCell>{task?.priority}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TaskList;
