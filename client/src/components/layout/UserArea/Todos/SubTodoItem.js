import React, { useState, useContext, useEffect } from "react";
import TodoContext from "../../../../context/todo/todoContext";

const SubTodoItem = ({ subTodo }) => {
  const todoContext = useContext(TodoContext);
  const { deleteSubTodo, updateSubTodo } = todoContext;

  // Refreshes the sub todos from context
  useEffect(() => {
    setNewSubTodo(subTodo);
  }, []);

  const [newSubTodo, setNewSubTodo] = useState(subTodo);

  const { _id, name, isCompleted } = newSubTodo;

  // handles the delete of this sub todo from context and the display
  const handleDeleteSubTodo = () => {
    deleteSubTodo(_id);
  };

  // Updates context of the completed property of this sub todo
  const handleCheck = () => {
    setNewSubTodo({ ...newSubTodo, isCompleted: !isCompleted });
    updateSubTodo({ ...newSubTodo, isCompleted: !isCompleted });
  };

  // Renders this sub todo item and populates the content from context
  return (
    <li
      className="list-group-item px-3 d-flex align-items-center"
      style={{ minHeight: "54px" }}
    >
      <div className="row">
        <div className="col-11 p-0">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id={_id}
              checked={isCompleted}
              onChange={handleCheck}
            />
            <label
              className="custom-control-label todoItemLabel"
              style={
                isCompleted
                  ? { textDecoration: " line-through" }
                  : { textDecoration: "" }
              }
              htmlFor={_id}
            >
              {name}
            </label>
          </div>
        </div>
        {isCompleted && (
          <div
            className="btn text-danger float-right  text-right p-0 col-1"
            onClick={() => handleDeleteSubTodo()}
          >
            <i className="fas fa-times" />
          </div>
        )}
      </div>
    </li>
  );
};

export default SubTodoItem;
