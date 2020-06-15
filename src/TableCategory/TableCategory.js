import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const TableSearch = ({ handleCategory,uniValue }) => {
  console.log(uniValue);
  return (
    <React.Fragment>
      <select className="custom-select custom-select-sm">
        <option selected onClick={handleCategory} value='null'>All</option>
        {uniValue.map(categor => (
          <option onClick={handleCategory} key={categor} value={categor}>{categor}</option>
        ))}
        
        {/* <option onClick={handleCategory} value="work">Work</option>
        <option onClick={handleCategory} value="home">Home</option> */}
      </select>
    </React.Fragment>
  );
};

export default TableSearch;
