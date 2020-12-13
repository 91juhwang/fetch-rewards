import React, { useState } from 'react'
import PropTypes from 'prop-types'

import ListTable from './components/ListTable'
import FilterChips from './components/FilterChips'
import Paging from './components/Paging'

import { withStyles } from '@material-ui/core/styles'
import { appStyle } from './style/appStyle'

const DATA = require('./data/data.json')

const App = ({ classes }) => {
  const [selectedListIDs, setSelectedListIDs] = useState([])
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)

  // sorting by the listID first then by the name
  const list = DATA
    .filter(data => !!data.name)
    .sort((first, second) => {
      if (first.listId > second.listId) {
        return 1
      } else if (first.listId < second.listId) {
        return -1
      }
      // using .id to sort by name as `name` contains `ID` as a suffix
      if (first.id > second.id) {
        return 1
      } else if (first.id < second.id) {
        return -1
      }
      return 0
    })
    .filter(data => selectedListIDs.includes(data.listId))

  // pagination
  const totalResults = list.length
  const indexOfLastItem = page * perPage
  const indexOfFirstItem = indexOfLastItem - perPage
  const currentList = list.slice(indexOfFirstItem, indexOfLastItem)

  return (
    <div className={classes.rootContainer}>
      <FilterChips
        setSelectedListIDs={setSelectedListIDs}
        selectedListIDs={selectedListIDs}
        setPage={setPage}
      />
      <ListTable list={currentList} />
      <Paging
        page={page}
        perPage={perPage}
        setPage={setPage}
        setPerPage={(value) => {
          setPage(1)
          setPerPage(value)
        }}
        totalResults={totalResults}
      />
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(appStyle)(App)
