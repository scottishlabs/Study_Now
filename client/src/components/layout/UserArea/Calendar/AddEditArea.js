import React, { useContext } from "react";
import moment from "moment";
import EventContext from "../../../../context/events/eventContext";
import AddArea from "./AddArea";
import EditArea from "./EditArea";
import EventsView from "./EventsView";

const AddEditArea = ({
  isAdd,
  setIsAdd,
  isActive,
  setIsActive,
  selectedDate,
}) => {
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

  const onClose = () => {
    setIsActive(false);
    clearCurrentEvent();
  };

  const onAddEvent = () => {
    setIsAdd(true);
    setIsActive(true);
  };

  return (
    <div
      className={`bg-dark addEditWrapperCalendar ${isActive ? "active" : ""}`}
      style={{ padding: "1rem 39px" }}
    >
      <div className="container h-100 w-100">
        {isAdd ? (
          <AddArea
            isAdd={isAdd}
            setIsAdd={setIsAdd}
            setIsActive={setIsActive}
            date={selectedDate}
          />
        ) : current !== null ? (
          <EditArea
            isAdd={isAdd}
            setIsAdd={setIsAdd}
            setIsActive={setIsActive}
          />
        ) : (
          <div className="text-white">
            <div className="row">
              <div className="col-11 p-0 eventUnselectable">
                <div className="d-flex flex-column p-0">
                  <h1>View Events</h1>
                  <h6>{moment(selectedDate).format("dddd Do MMMM YYYY")}</h6>
                </div>
              </div>
              <div className="col-1 p-0">
                <i
                  className="fas fa-times text-secondary float-right fa-2x"
                  style={{ lineHeight: "50px" }}
                  onClick={onClose}
                />
              </div>
            </div>
            <EventsView date={selectedDate} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AddEditArea;
