import React, { useContext, useEffect, useState } from "react";
import TodoContext from "../../../../context/todo/todoContext";
import SubTodoItem from "./SubTodoItem";

const TodoItem = ({ todo, setIsActive }) => {
  const todoContext = useContext(TodoContext);
  const { updateTodo, subTodos, setCurrent, addSubTodo, getSubTodos } =
    todoContext;

  // Current sub todos pulled from context
  const { _id, name, isCompleted, urgent, important } = todo;

  const [currentSubTodos, setCurrentSubTodos] = useState(subTodos);

  const [isCollapsed, setIsCollapsed] = useState(true);

  // The initial state of a new sub todo object
  const [newSubTodo, setNewSubTodo] = useState({
    name: "",
    isCompleted: false,
  });

  useEffect(() => {
    getSubTodos();
    setCurrentSubTodos(subTodos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subTodos]);

  // Sets the complete property of the todo
  const handleCheck = () => {
    updateTodo({ ...todo, isCompleted: !isCompleted });
  };

  // Sets the current property of context to this todo and opens the todo form sidebar
  const handleTodoSelect = (e) => {
    setCurrent(todo);
    setIsActive(true);
  };

  const handleAddSubTodo = () => {
    if (newSubTodo.name !== "") {
      addSubTodo({ ...newSubTodo, subTodoId: todo._id });
      setNewSubTodo({ ...newSubTodo, name: "" });
    }
  };

  // draws the sub todo list from context
  const drawSubTodo = () => {
    let thisSubTodos = null;
    if (todo !== null) {
      thisSubTodos = currentSubTodos.filter(
        (subTodo) => todo._id === subTodo.subTodoId
      );
    }

    return (
      <>
        <ul className="list-group col-12 mt-2 p-0">
          {thisSubTodos.map((subTodo) => (
            <SubTodoItem key={subTodo._id} id={subTodo._id} subTodo={subTodo} />
          ))}
        </ul>
      </>
    );
  };

  // Renders the individual todo item which can be selected, checked and deleted
  return (
    <li
      className="list-group-item d-flex flex-column align-items-center todoUnSelectable"
      id="subTodos"
    >
      <div className="row p-0">
        <div className="col-12">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id={_id}
              checked={isCompleted}
              onChange={handleCheck}
            />
            <label
              className="custom-control-label  todoItemLabel"
              style={
                isCompleted
                  ? { textDecoration: " line-through" }
                  : { textDecoration: "" }
              }
              htmlFor={_id}
            >
              {name}
            </label>
            <div className="float-right">
              {urgent ? (
                <span className="badge badge-pill badge-primary mx-1">
                  Urgent
                </span>
              ) : null}
              {important ? (
                <span className="badge badge-pill badge-secondary mx-1">
                  Important
                </span>
              ) : null}
              <div className="float-right">
                <button
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                  className="btn text-secondary focus p-0 pl-2 pr-1 buttonNoFocus collapsed"
                  onClick={() => setIsCollapsed(!isCollapsed)}
                >
                  {isCollapsed ? (
                    <i className="fa fa-caret-up" />
                  ) : (
                    <i className="fa fa-caret-down" />
                  )}
                </button>
                <div
                  className="btn text-primary p-0 pl-2 pr-1"
                  onClick={() => handleTodoSelect()}
                >
                  <i className="fa fa-pencil-square-o" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="collapseOne"
        className="collapse w-100 mt-2"
        aria-labelledby="headingOne"
        data-parent="#subTodos"
      >
        <div className="input-group w-100">
          <input
            placeholder="Add New To-do.."
            type="text"
            name="name"
            maxLength="48"
            value={newSubTodo.name}
            onChange={(e) =>
              setNewSubTodo({ ...newSubTodo, name: e.target.value })
            }
            className="form-control"
          />
          <div className="input-group-append">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => handleAddSubTodo()}
            >
              <i className="fas fa-plus" />
            </button>
          </div>
        </div>
        {drawSubTodo()}
      </div>
    </li>
  );
};
export default TodoItem;
