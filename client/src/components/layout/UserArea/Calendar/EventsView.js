import React, { useContext } from "react";
import EventsViewItem from "./EventsViewItem";
import EventContext from "../../../../context/events/eventContext";

const EventsView = ({ date }) => {
  const eventContext = useContext(EventContext);
  const {
    events,
    current,
    addEvent,
    editEvent,
    deleteEvent,
    setCurrentEvent,
    clearCurrentEvent,
  } = eventContext;

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

  const currentEvents = currentEventsFilter();

  return (
    <div>
      <div className="card">
        <div className="card-body text-dark text-center px-1 py-2">
          <i className="fas fa-lightbulb mr-2 text-warning" />
          HINT: To view Todo deadlines, head to the Todo page.
        </div>
      </div>
      {currentEvents.map((event) => (
        <EventsViewItem key={event._id} event={event} />
      ))}
    </div>
  );
};

export default EventsView;
