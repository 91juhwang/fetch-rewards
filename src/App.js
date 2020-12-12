import React, { useState } from 'react';
import PropTypes from 'prop-types';
// components
import ListTable from './ListTable';
import FilterChips from './FilterChips';
// constants
const DATA = require('./data/data.json')

const App = () => {
  const [selectedListIDs, setSelectedListIDs] = useState([])
  // sorting by the listID first then by the name
  const sortedList = DATA.filter(data => !!data.name).sort((a, b) => {
    if (a.listId > b.listId) {
      return 1
    }
    if (b.listId > a.listId) {
      return -1
    }
    // using .id instead of .name as the `name` contains `ID` as the suffix numeric value
    if (a.id > b.id) {
      return 1
    }
    if (b.id > a.id) {
      return -1
    }
    return 0
  });
  const list = sortedList.filter(data => selectedListIDs.includes(data.listId))

  return (
    <div>
      <FilterChips setSelectedListIDs={setSelectedListIDs} selectedListIDs={selectedListIDs} />
      <ListTable list={list} />
      {/* pagination */}
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default App;
