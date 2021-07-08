import React, { useContext } from "react";
import TodoContext from "../../../../context/todo/todoContext";

const TaskItem = ({ todo }) => {
  const todoContext = useContext(TodoContext);
  const { updateTodo, subTodos, setCurrent, addSubTodo, getSubTodos } =
    todoContext;

  const { _id, name, isCompleted, urgent, important } = todo;

  const handleCheck = () => {
    updateTodo({ ...todo, isCompleted: !isCompleted });
  };

  return (
    <li className="list-group-item d-flex flex-column align-items-center todoUnSelectable px-0 pt-0 border-0">
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
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
