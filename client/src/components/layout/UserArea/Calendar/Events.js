import React, { useContext, useEffect, Fragment } from "react";
import EventItem from "./EventItem";
import EventContext from "../../../../context/events/eventContext";
import TodoContext from "../../../../context/todo/todoContext";

const Events = ({ date, isDisabled }) => {
  const todoContext = useContext(TodoContext);
  const { todos } = todoContext;

  const eventContext = useContext(EventContext);
  const { events } = eventContext;

  const currentEventsFilter = () => {
    return events.filter(
      (event) =>
        date >= getDateOnly(new Date(event.start)) &&
        date <= getDateOnly(new Date(event.end))
    );
  };

  const getDateOnly = (currentDate) => {
    return new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
    );
  };

  const datesAreOnSameDay = (first, second) =>
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();

  const currentEvents = currentEventsFilter();

  const currentTodoItems = () => {
    const currentTodos = todos.filter((todo) =>
      datesAreOnSameDay(date, new Date(todo.deadline))
    );

    const currentTodosList = currentTodos.map((event) => (
      <EventItem key={event._id} event={event} />
    ));

    return currentTodosList;
  };

  const isEvent = () => {
    const currentTodos = todos.filter((todo) =>
      datesAreOnSameDay(date, new Date(todo.deadline))
    );

    if (currentTodos.length > 0 || currentEvents.length > 0) {
      return (
        <div className="events-sm-container text-center">
          <span className="events-sm" />
        </div>
      );
    }
    return <></>;
  };

  return (
    <>
      {isEvent()}
      <div
        className={`dateEvents d-none d-md-block  ${
          isDisabled ? "disabled" : ""
        }`}
      >
        {currentEvents.map((event) => (
          <EventItem key={event._id} event={event} />
        ))}
        {currentTodoItems()}
      </div>
    </>
  );
};

export default Events;
