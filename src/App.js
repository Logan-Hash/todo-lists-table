import React, { useState, Fragment, useEffect } from "react";


import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./tables/UserTable";

const App = () => {
  useEffect(() => {
    console.clear();
  }, []);
  // Data
  const usersData = [
    { id: 1, name: "Go to the school", isCompleted: false, category: "work" },
    { id: 2, name: "Clean the office", isCompleted: false, category: "work" },
    { id: 3, name: "take homework", isCompleted: false, category: "home" },
    { id: 4, name: "Go to work", isCompleted: false, category: "home" },
    { id: 5, name: "apple", isCompleted: false, category: "home" },
    { id: 6, name: "eatting the orange", isCompleted: false, category: "work" },
    {
      id: 7,
      name: "junction-river task",
      isCompleted: false,
      category: "home",
    },
  ];

  const initialFormState = {
    id: null,
    name: "",
    category: "",
    isCompleted: null,
  };

  // Setting state
  const [category, setCategory] = useState(["home", "work"]);
  const [todos, setTodos] = useState(usersData);
  const [currentTodo, setCurrentTodo] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const uniValue = [...new Set(category.map((cate) => cate))];
  console.log(uniValue);
  const addTodo = (todo) => {
    todo.id = todos.length + 1;
    setTodos([...todos, todo]);

    setCategory([...category, todo.category]);
  };

  const deleteTodo = (id) => {
    setEditing(false);

    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, updatedTodo) => {
    setEditing(false);
    
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  const editRow = (todo) => {
    setEditing(true);

    setCurrentTodo({ id: todo.id, name: todo.name, category: todo.category });
    return todo;
  };

  return (
    <div className="container">
      <h2 className="text-center shadow p-3 mb-5 bg-white rounded">
        <span className="text-success ">Todo</span>{" "}
        <span className="text-info">List</span>{" "}
        <span className="text-primary">Table</span>
      </h2>
      {editing ? '' : <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#addtodo"
      >
        Add Todo
      </button>
      }
      <div className="">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentTodo={currentTodo}
                updateTodo={updateTodo}
              />
            </Fragment>
          ) : (
            <Fragment>
              <AddUserForm
                addTodo={addTodo}
                category={category}
                isCompleted={todos.isCompleted}
              />
            </Fragment>
          )}
        </div>
        <div className="flex-large">
          <h2 className="text-center">View Todos</h2>

          <UserTable
            key={todos.id}
            todos={todos}
            setTodos={setTodos}
            editRow={editRow}
            deleteTodo={deleteTodo}
            uniValue={uniValue}
            setCategory={setCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
