import React from 'react'
import PropTypes from 'prop-types'

import {
  Select,
  IconButton
} from '@material-ui/core'
import RightIcon from '@material-ui/icons/ChevronRight'
import LeftIcon from '@material-ui/icons/ChevronLeft'
import { withStyles } from '@material-ui/core/styles'
import { pagingStyle } from '../style/pagingStyle'

export const Paging = ({
  classes,
  page,
  perPage,
  setPage,
  setPerPage,
  totalResults
}) => {
  const totalPages = Math.ceil(totalResults / perPage)
  return (
    <div className={classes.pagingContainer}>
      <div className={classes.perPageContainer}>
        <Select
          native
          autoWidth
          variant="outlined"
          className={classes.perPageSelectComponent}
          classes={{
            root: classes.perPageSelect,
            select: classes.perPageSelectControl
          }}
          value={perPage}
          onChange={event => setPerPage(parseInt(event.target.value, 10))}
        >
          <option value={10}>10 per page</option>
          <option value={50}>50 per page</option>
          <option value={100}>100 per page</option>
        </Select>
      </div>
      <div className={classes.paginationContainer}>
        <span className={classes.paginationText}>
          Page {page} of {totalPages}
        </span>
        {(totalResults > perPage) && (
          <IconButton
            className={classes.pagingButton}
            classes={{
              root: classes.pagingButtonLeft,
              disabled: classes.pagingButtonDisabled
            }}
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            <LeftIcon />
          </IconButton>
        )}
        {(totalResults > perPage) && (
          <IconButton
            className={classes.pagingButton}
            classes={{
              root: classes.pagingButtonRight,
              disabled: classes.pagingButtonDisabled
            }}
            onClick={() => setPage(page + 1)}
            disabled={(page >= totalPages)}
          >
            <RightIcon />
          </IconButton>
        )}
      </div>
    </div>
  )
}

Paging.propTypes = {
  classes: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  setPerPage: PropTypes.func.isRequired,
  totalResults: PropTypes.number.isRequired
}

export default withStyles(pagingStyle)(Paging)
