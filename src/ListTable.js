import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { tableStyle } from './style/tableStyle';

const ListTable = ({ classes, list }) => (
  <TableContainer className={classes.dataTableContainer}>
    <Table className={classes.dataTable}>
      <TableHead className={classes.dataTableHead}>
        <TableRow className={classes.dataTableRow}>
          <TableCell className={classes.dataTableCell}>ListID</TableCell>
          <TableCell className={classes.dataTableCell}>Name</TableCell>
        </TableRow>
      </TableHead>
      <TableBody className={classes.dataTableBody}>
        {list.map(({
          id,
          listId,
          name
        }) => (
          <TableRow className={classes.dataTableRow} key={id}>
            <TableCell className={classes.dataTableCell}>
              {listId}
            </TableCell>
            <TableCell className={classes.dataTableCell}>
              {name}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

ListTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(tableStyle)(ListTable);
