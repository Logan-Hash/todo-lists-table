import React from "react";

const TableCheck = ({ handleCheck, todos }) => {
  return (
    <React.Fragment>
      
      Check
      <input
        type="checkbox"
        className="mr-3"
        defaultChecked={false}
        checked={todos.isCompleted}
        onClick={handleCheck}
      />
        
      All
      <input
        type="checkbox"
        value="uncheck"
        className="mr-3"
        defaultChecked={true}
        checked={todos.isCompleted}
        onClick={handleCheck}
      />
    </React.Fragment>
  );
};

export default TableCheck;
