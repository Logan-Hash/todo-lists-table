import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const TableSearch = ({ handleCategory,uniValue }) => {

  return (
    <React.Fragment>
      <select className="custom-select custom-select-sm" onChange={handleCategory}>
        <option selected  value='null'>All</option>
        {uniValue.map(categor => (
          <option  key={categor} value={categor}>{categor}</option>
        ))}
      </select>
    </React.Fragment>
  );
};

export default TableSearch;
