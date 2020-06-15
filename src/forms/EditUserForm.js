import React, { useState, useEffect } from "react";

const EditUserForm = (props) => {
  const [todos, setTodos] = useState(props.currentTodo);

  useEffect(() => {
    setTodos(props.currentTodo);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value, category, isCompleted, checked } = event.target;

    setTodos({
      ...todos,
      [name]: value,
      [category]: value,
      [isCompleted]: checked,
    });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateTodo(todos.id, todos);
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
        className="mx-2"
        checked={todos.isCompleted}
        onClick={handleInputChange}
      />
      <br />
      <button className="btn btn-primary">Update Todo</button>
      <button
        onClick={() => props.setEditing(false)}
        className="btn btn-warning mx-2"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
