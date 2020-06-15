import React from 'react';

const TableSearch = ({handleSearch}) => {

  return (
    <React.Fragment>
      <input type="text" className="form-control" placeholder="Search Todo List....." onChange={handleSearch} />
    </React.Fragment>
  )
}

export default TableSearch;
