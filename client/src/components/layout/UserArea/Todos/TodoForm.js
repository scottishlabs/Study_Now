import React, { useContext, useState, useEffect, Fragment } from "react";
import TodoContext from "../../../../context/todo/todoContext";
import DatePicker from "react-datepicker";
import moment from "moment";
import SubTodoItem from "./SubTodoItem";
import "./Todos.css";
import "react-datepicker/dist/react-datepicker.css";
import parseISO from "date-fns/parseISO";

// A component that contains all the forms for the currently selected todo
const TodoForm = ({ isActive, setIsActive }) => {
  const todoContext = useContext(TodoContext);

  const { current, setCurrent, updateTodo, deleteTodo } = todoContext;

  // Refreshes the rendered components so they are updated with current context
  useEffect(() => {
    if (current !== null) {
      setTodo({ ...current });
      setStartDate(new Date(current.deadline))
    } else {
      setTodo({
        name: "",
        description: "",
        isCompleted: false,
        urgent: false,
        important: false,
        deadline: new Date(),
      });
    }
  }, [current]);

  // Initial state of whether the forms are editable
  const [isEditing, setIsEditing] = useState(false);

  // Initial state of a new todo object
  const [todo, setTodo] = useState({
    name: "",
    description: "",
    isCompleted: false,
    urgent: false,
    important: false,
    deadline: new Date(),
  });

  const [startDate, setStartDate] = useState(new Date());

  // Updates currently selected todo with the inputs in the form and pushes it to context
  const submitUpdate = (e) => {
    e.preventDefault();
    updateTodo({...todo, deadline:startDate});
    setCurrent({...todo, deadline:startDate});
    setIsEditing(false);
  };

  // Renders a different component depending on whether a todo is selected or not
  const isTodoSelected = () => {
    // Updates new todo state for each value of the input
    const onChange = (e) => {
      setTodo({ ...todo, [e.target.id]: e.target.value });
    };

    // Deletes the currently selected todo from context
    const handleDeleteTodo = () => {
      deleteTodo(current._id);
      setCurrent(null);
    };

    // If no todo is selected a default form screen will be displayed
    // Otherwise a form will be displayed containing all information about the currently selected todo which can be edited
    if (current === null) {
      return (
        <div className="todoForm d-flex flex-column defaultIcon">
          <i className="fas fa-check-square" />
          Click a To-do to view details
        </div>
      );
    }
    const { name, description, isCompleted, urgent, important, deadline } =
      todo;

    return (
      <div className="todoForm form p-3 mx-2">
        <div className="row w-100 border border-secondary border-top-0 border-left-0 border-right-0 pb-2 mb-2">
          <div className="col-11 p-0">
            <h3 className="text-left text-white text-capitalize px-0">
              {name}
            </h3>
            {deadline && (
              <h6 className="text-left px-0">
                Due: {moment(deadline).format("dddd Do MMMM YYYY")}
              </h6>
            )}
          </div>
          <div
            className="btn text-secondary position-absolute mx-4 closeSettingsBtn"
            onClick={() => {
              setCurrent(null);
              setIsActive(false);
            }}
          >
            <i className="fas fa-times" />
          </div>
        </div>
        <form onSubmit={submitUpdate}>
          {isEditing ? (
            <button
              type="submit"
              className="mt-3 mb-2 btn btn-success btn-block"
            >
              <i className="fas fa-check" />
            </button>
          ) : (
            <div
              className="mt-3 mb-2 btn btn-primary btn-block"
              onClick={() => setIsEditing(true)}
            >
              <i className="fas fa-edit" />
            </div>
          )}

          <div className="form-group">
            <label className="text-white" htmlFor="name">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Title"
              readOnly={!isEditing}
            />
          </div>
          <div className="form-group">
            <label className="text-white" htmlFor="description">
              Description
            </label>
            <textarea
              type="text"
              className="form-control"
              id="description"
              value={description}
              onChange={onChange}
              placeholder="Description"
              rows="4"
              readOnly={!isEditing}
            />
          </div>
          <div className="form-group w-100 row">
            <label className="text-white col-12  p-0" htmlFor="deadline">
              Deadline:
            </label>
            <DatePicker
              className="form-control col-12"
              id="deadline"
              minDate={new Date()}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              disabled={!isEditing}
            />
          </div>
          <div className="custom-control custom-checkbox mt-4">
            <input
              type="checkbox"
              id="urgent"
              className="custom-control-input"
              checked={urgent}
              onChange={() => setTodo({ ...todo, urgent: !urgent })}
              disabled={!isEditing}
            />
            <label className="custom-control-label text-white" htmlFor="urgent">
              Urgent
            </label>
          </div>
          <div className="custom-control custom-checkbox mb-4">
            <input
              type="checkbox"
              id="important"
              className="custom-control-input"
              checked={important}
              onChange={() => setTodo({ ...todo, important: !important })}
              disabled={!isEditing}
            />
            <label
              className="custom-control-label text-white"
              htmlFor="important"
            >
              Important
            </label>
          </div>
        </form>
        <div
          className="mb-2 mt-4 btn btn-danger btn-block"
          onClick={() => handleDeleteTodo()}
        >
          <i className="fas fa-trash" />
        </div>
      </div>
    );
  };

  return (
    <div
      className={`todoFormWrapper m-auto col-lg-5 bg-dark ${
        isActive ? "active" : ""
      }`}
    >
      {isTodoSelected()}
    </div>
  );
};

export default TodoForm;
