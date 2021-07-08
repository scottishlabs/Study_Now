import React, { useState, Fragment } from "react";
import { CirclePicker } from "react-color";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const EventForm = () => {
  const [event, setEvent] = useState({
    eventName: "",
    eventStartDate: "",
    eventEndDate: "",
    isEventAllDay: "",
    eventDescription: "",
    eventLocation: "",
    color: "",
  });

  const [startDate, setStartDate] = useState(new Date());

  const {
    eventName,
    eventStartDate,
    eventEndDate,
    isEventAllDay,
    eventDescription,
    eventLocation,
    color,
  } = event;

  const onChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="eventName">Event Name</label>
        <input
          id="eventName"
          className="text form-control"
          placeholder="Name"
          name="eventName"
          value={eventName}
        />
      </div>
      <div
        className="custom-control custom-checkbox"
        style={{ paddingBottom: "0.5rem" }}
      >
        <input
          className="custom-control-input"
          type="checkbox"
          name="isEventAllDay"
          value={isEventAllDay}
          id="allDayCheck"
        />
        <label className="custom-control-label" htmlFor="allDayCheck">
          All Day?
        </label>
      </div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
      <div className="form-group">
        <label htmlFor="eventDescription">Event Description</label>
        <textarea
          className="form-control"
          id="eventDescription"
          rows="3"
          placeholder="Description"
          name="eventDescription"
          value={eventDescription}
        />
      </div>
      <div className="form-group">
        <label htmlFor="eventLocation">Event Location</label>
        <input
          id="eventLocation"
          className="text form-control"
          placeholder="Location"
          name="eventLocation"
          value={eventLocation}
        />
      </div>
      <div className="form-group">
        <label htmlFor="eventColor">Event Colour</label>
        <CirclePicker
          id="eventColor"
          className="color"
          value={color}
          style={{ width: "400px", margin: "auto" }}
        />
      </div>
    </form>
  );
};

export default EventForm;
