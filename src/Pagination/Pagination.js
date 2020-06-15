import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Pagination = ({ todosPerPage, totalTodos, paginate, currentPage}) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <React.Fragment>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pageNumber.map((number) => (
            <li key={number}>
              <a
                onClick={(e) => e.preventDefault(paginate(number))}
                href="!#"
                className={
                  currentPage === number
                    ? "active page-link"
                    : "page-link"
                }
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Pagination;
