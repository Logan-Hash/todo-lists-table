import React, { useState } from "react";
import  { Redirect } from 'react-router-dom'


const AddUserForm = (props) => {

  const initialFormState = {
    id: null,
    name: "",
    category: "",
    isCompleted: false,
  };
  const [todos, setTodos] = useState(initialFormState);
  const handleInputChange = (event) => {
    const { name, category, isCompleted, checked, value } = event.target;

    setTodos({
      ...todos,
      [name]: value,
      [category]: value,
      [isCompleted]: checked,
    });
  };

  const handleClose = () => {
    setTodos(initialFormState)
  }
  return (
    <div className="modal" tabindex="-1" role="dialog" id="addtodo">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Todo</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                if (!todos.name || !todos.category)
                  return alert("Please Fill Form ! Or Don't be Blank text ! ");
                props.addTodo(todos);
                setTodos(initialFormState);
                return <Redirect to='/s'  />
              }}
            >
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={todos.name}
                onChange={handleInputChange}
              />
              <label>Category</label>
              <input
                type="text"
                name="category"
                value={todos.category}
                onChange={handleInputChange}
              />
              <label>Check</label>
              <input
                type="checkbox"
                name="isCompleted"
                className="mx-3"
                checked={todos.isCompleted}
                value={todos.isCompleted}
                onClick={handleInputChange}
              />
              <br />
              <button className="btn btn-primary" >Add new Todo</button>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserForm;
