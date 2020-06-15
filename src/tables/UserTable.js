import React, { useState, useEffect } from "react";

import TableSearch from "../TableSearch/TableSearch";
import Pagination from "../Pagination/Pagination";
import TableCategory from "../TableCategory/TableCategory";
import TableCheck from "../TableCheck/TableCheck";

const UserTable = (props) => {
  // Search  ------------------------
  const [search, setSearch] = useState(null);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  //search with Category --------------------------
  const [category, setCategory] = useState("null");
  const handleCategory = (e) => {
    if (category === props.category) return;
    setCategory(e.target.value);
    console.log(category);
  };

  //search with Check ----------------------
  const [check, setCheck] = useState("uncheck");
  const handleCheck = (e) => {
    setCheck(e.target.value);
  };

  //pagination ---------------
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(5);

  const indexOfLastPost = currentPage * todosPerPage;
  const indexOfFirstPost = indexOfLastPost - todosPerPage;
  const currentPost = props.todos.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => setCurrentPage(1), []);
  // End
  // Toggle Checked
  const toggleTodo = (id) => {
    console.log(id);
    const temporaryTodos = [...props.todos];
    console.log(temporaryTodos);
    temporaryTodos[id].isCompleted = !temporaryTodos[id].isCompleted;
    props.setTodos(temporaryTodos);
  };

  return (
    <React.Fragment>
      <TableSearch handleSearch={handleSearch} />
      <TableCategory
        handleCategory={handleCategory}
        uniValue={props.uniValue}
      />
      <TableCheck
        handleCheck={handleCheck}
        todos={props.todos}
        category={category}
      />
      <table>
        <thead>
          <tr>
            <th>Check</th>
            <th>Todo</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {props.todos.length > 0 ? (
            currentPost
              .filter((todo) => {
                if (search == null) return todo;
                else if (
                  todo.name
                    .toString()
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return todo;
                }
              })
              .filter((todo) => {
                if (check === "uncheck") return todo;
                else if (todo.isCompleted === true) {
                  return todo;
                } else if (todo.isCompleted === false)
                  return console.log("no data");
              })
              .filter((todo) => {
                if (category === "null") return todo;
                else if (
                  todo.category
                    .toString()
                    .toLowerCase()
                    .includes(category.toLowerCase(""))
                ) {
                  console.log(category);
                  return todo;
                }
              })
              .map((todo, index) => (
                <tr key={index} id={todo.id}>
                  <td>
                    <input
                      type="checkbox"
                      defaultChecked={todo.isCompleted}
                      checked={todo.isCompleted}
                      value={todo.isCompleted}
                      onChange={() => toggleTodo(todo.id - 1)}
                    />
                  </td>
                  <td
                    id={todo.id}
                    className={`${todo.isCompleted ? "line" : ""}`}
                  >
                    {todo.name}
                  </td>
                  <td>{todo.category}</td>
                  <td>
                    <button
                      onClick={() => {
                        props.editRow(todo);
                      }}
                      className={`${
                        todo.isCompleted ? "hide" : "btn btn-success mr-3"
                      }`}
                      type="button"
                      data-toggle="modal"
                      data-target="#edittodo"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => props.deleteTodo(todo.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
          ) : (
            <tr>
              <td colSpan={3}>No Data</td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination
        todosPerPage={todosPerPage}
        totalTodos={props.todos.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </React.Fragment>
  );
};

export default UserTable;
