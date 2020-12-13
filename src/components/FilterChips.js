import React from 'react'
import PropTypes from 'prop-types'
// MUI
import { Chip, Typography } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'
import { withStyles } from '@material-ui/core/styles'

import { filterChipStyle } from '../style/filterChipStyle'

const LIST_IDS = [1, 2, 3, 4]

const FilterChips = ({
  classes,
  setSelectedListIDs,
  selectedListIDs,
  setPage
}) => {
  const chipSelected = chip => selectedListIDs.includes(chip)

  const handleClick = (chip) => {
    if (chipSelected(chip)) {
      setSelectedListIDs(selectedListIDs.filter(item => item !== chip))
    } else {
      setPage(1)
      setSelectedListIDs([...selectedListIDs, chip])
    }
  }

  return (
    <div className={classes.container}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Available List IDs
      </Typography>
      <Typography variant="body1" align="center" className={classes.heading}>
        Select chips to view the list
      </Typography>
      <div className={classes.filterChipsContainer}>
        {LIST_IDS.map(chip => (
          <Chip
            icon={
              <CheckIcon
                visibility={chipSelected(chip) ? 'visible' : 'hidden'}
                classes={{
                  root: chipSelected(chip) ? classes.filterChipIcon : classes.filterChipIconHidden
                }}
              />
            }
            label={`${chip}`}
            disableRipple
            clickable
            variant="outlined"
            onClick={() => handleClick(chip)}
            key={chip}
            classes={{
              root: classes.filterChip,
              clickable: classes.filterChipsContainer,
              outlined: chipSelected(chip) ? classes.filterChipOutlined : classes.filterChipNoOutline
            }}
          />
        ))}
      </div>
    </div>
  )
}

FilterChips.propTypes = {
  classes: PropTypes.object.isRequired,
  setSelectedListIDs: PropTypes.func.isRequired,
  selectedListIDs: PropTypes.array.isRequired,
  setPage: PropTypes.func.isRequired
}

export default withStyles(filterChipStyle)(FilterChips)
