import React, { useState, useEffect, useContext } from "react";
import TodoContext from "../../../../context/todo/todoContext";
import moment from "moment";
import TaskItem from "./TaskItem";

const TaskView = () => {
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
    loading: todoLoading,
    getTodos,
    getSubTodos,
  } = todoContext;

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const [newTodo, setNewTodo] = useState({
    name: "",
    description: "",
    isCompleted: false,
    urgent: false,
    important: false,
    deadline: new Date(),
  });

  const isSameDate = (date1, date2) => {
    if (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getYear() === date2.getYear()
    )
      return true;
    return false;
  };

  const getToday = () => {
    return todos.filter((todo) => {
      if (todo.deadline) {
        return isSameDate(new Date(todo.deadline), new Date());
      } else {
        return false;
      }
    });
  };

  const getTomorrow = () => {
    return todos.filter((todo) => {
      if (todo.deadline) {
        return isSameDate(
          new Date(todo.deadline),
          moment(new Date()).add(1, "d").toDate()
        );
      } else {
        return false;
      }
    });
  };

  const getFuture = () => {
    return todos.filter((todo) => {
      if (todo.deadline) {
        return (
          new Date(todo.deadline) > moment(new Date()).add(1, "d").toDate()
        );
      } else {
        return false;
      }
    });
  };

  const getUndated = () => {
    return todos.filter((todo) => !todo.deadline);
  };

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

  return (
    <>
      <div className="addTodo input-group p-0 mb-2">
        <input
          placeholder="Add New Quick Task"
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
      {!todoLoading && todos !== null ? (
        <div>
          <h6 className="font-weight-bold">Today</h6>
          {getToday().map((todo) => (
            <TaskItem key={todo._id} todo={todo} />
          ))}
          <h6 className="font-weight-bold">Tomorrow</h6>
          {getTomorrow().map((todo) => (
            <TaskItem key={todo._id} todo={todo} />
          ))}
          <h6 className="font-weight-bold">Future</h6>
          {getFuture().map((todo) => (
            <TaskItem key={todo._id} todo={todo} />
          ))}
          <h6 className="font-weight-bold">Undated</h6>
          {getUndated().map((todo) => (
            <TaskItem key={todo._id} todo={todo} />
          ))}
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskView;
