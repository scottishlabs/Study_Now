import React, { useState, Fragment, useContext, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoContext from "../../../../context/todo/todoContext";

// Handles the display of the todos from context
const Todos = ({ setIsActive }) => {
  useEffect(() => {
    getTodos();
    getSubTodos();
    // eslint-disable-next-line
  }, []);

  const todoContext = useContext(TodoContext);
  const {
    todos,
    addTodo,
    filtered,
    filterTodos,
    clearFilter,
    prioritySort,
    deadlineSort,
    alphabeticalSort,
    subTodos,
    loading,
    getTodos,
    getSubTodos,
  } = todoContext;

  // Initial state for a new todo
  const [newTodo, setNewTodo] = useState({
    name: "",
    description: "",
    isCompleted: false,
    urgent: false,
    important: false,
    deadline: new Date(),
  });

  // Initial state for the filter input
  const [filter, setFilter] = useState("");

  // Handles the adding of a new todo from state and pushes it to context
  const handleAddTodo = () => {
    if (newTodo.name !== "") {
      clearFilter();
      addTodo(newTodo);
      setNewTodo({
        name: "",
        description: "",
        isCompleted: false,
        urgent: false,
        important: false,
        deadline: new Date(),
      });
    }
  };

  // Clears the filter form and sets filtered context to null
  const handleClearFilter = () => {
    clearFilter();
    setFilter("");
  };

  // Sorts the todos by A-Z
  const handleSortAlphabetical = () => {
    console.log("SORT STARTED");
    alphabeticalSort();
  };

  // Sorts the todos by priority
  const handleSortPriority = () => {
    console.log("SORT STARTED");
    prioritySort();
  };

  // Sorts the todos by deadline
  const handleSortDeadline = () => {
    console.log("SORT STARTED");
    deadlineSort();
  };

  // Renders the todo list area
  return (
    <div className="todoListArea d-block m-auto col-lg-7">
      <div className="addTodo input-group">
        <input
          placeholder="Add New To-do.."
          type="text"
          name="name"
          maxLength="48"
          value={newTodo.name}
          onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
          className="form-control"
        />
        <div className="input-group-append">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => handleAddTodo()}
          >
            <i className="fas fa-plus" />
          </button>
        </div>
      </div>
      <div className="row w-100 ml-auto mb-3 mr-3 justify-content-between">
        <div className="col-4">
          <div className="input-group">
            <input
              placeholder="Filter.."
              type="text"
              name="name"
              maxLength="48"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="form-control"
            />
            <div className="input-group-append">
              <button
                type="submit"
                className="btn btn-secondary"
                onClick={() => filterTodos(filter)}
              >
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-4 p-0">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handleClearFilter()}
          >
            Clear Filter
          </button>
        </div>
        <div className="col-4">
          <div className="btn-group float-right">
            <button type="button" className="btn btn-secondary">
              Sort by
            </button>
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <button
                type="button"
                className="dropdown-item"
                onClick={() => handleSortAlphabetical()}
              >
                A-Z
              </button>
              <button
                type="button"
                className="dropdown-item"
                onClick={() => handleSortPriority()}
              >
                Priority
              </button>
              <button
                type="button"
                className="dropdown-item"
                onClick={() => handleSortDeadline()}
              >
                Deadline
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      {todos !== null && subTodos !== null && !loading ? (
        <div className="container-fluid todoList">
          <ul className="list-group">
            {filtered !== null
              ? filtered.map((todo) => (
                  <TodoItem
                    key={todo._id}
                    todo={todo}
                    setIsActive={setIsActive}
                  />
                ))
              : todos.map((todo) => (
                  <TodoItem
                    key={todo._id}
                    todo={todo}
                    setIsActive={setIsActive}
                  />
                ))}
          </ul>
        </div>
      ) : (
        <div className="d-flex justify-content-center ">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todos;
