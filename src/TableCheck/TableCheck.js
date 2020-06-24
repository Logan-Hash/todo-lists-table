import React from "react";

const TableCheck = ({ handleCheck, todos }) => {
  return (
    <React.Fragment>
      
      Check
      <input
        type="checkbox"
        className="mr-3"
        defaultChecked={true}
        onChange={handleCheck}
      />
    </React.Fragment>
  );
};

export default TableCheck;
