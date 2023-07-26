import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

// Localizer setup using moment
const localizer = momentLocalizer(moment);

// Sample event data (you can replace this with your data)
const events = [
  {
    id: 1,
    title: "Site Visit",
    start: new Date(2023, 6, 15, 10, 0),
    end: new Date(2023, 6, 17, 12, 0),
  },
  {
    id: 2,
    title: "Meeting 2",
    start: new Date(2023, 6, 16, 14, 0),
    end: new Date(2023, 6, 16, 16, 0),
  },
  {
    id: 3,
    title: "Birthday Party",
    start: new Date(2023, 6, 2, 10, 0),
    end: new Date(2023, 6, 3, 12, 0),
  },
  // Add more events as needed
];

//costomize
const CustomToolbar = (toolbar) => {
  const { label } = toolbar;
  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group d-flex gap-2">
        <button className="px-2" type="button">
          <BsChevronLeft />
        </button>
        <button className="px-2" type="button">
          <BsChevronRight />
        </button>
        <button className="px-2 border-primary" type="button">
          Today
        </button>
      </span>
      <span className="rbc-toolbar-label">{label}</span>
      <span className="rbc-btn-group d-flex gap-2">
        <button className="px-3 rounded-2 border border-2  bg-white active">
          Month
        </button>
        <button className="px-3 rounded-2 border border-2  bg-white">
          Week
        </button>
        <button className="px-3 rounded-2 border border-2  bg-white">
          Day
        </button>
      </span>
    </div>
  );
};

//event style
const eventStyleGetter = (event) => {
  const backgroundColor = '#51B54A'; // Green color for events
  const fontSize = '12px'; // Small text size for events
  const timeText = moment(event.start).format('h:mm A'); // Start time for events

  return {
    style: {
      backgroundColor,
      fontSize,
    },
    title: timeText,
  };
};

const dayStyleGetter = (date) => {
  const backgroundColor =
    date.getMonth() === moment().month() ? '#ffffff' : 'white'; // White background color for dates in the current month

  return {
    style: {
      backgroundColor,
    },
  };
};

const BigCalendarComponent = () => {
  return (
    <div>
      <div style={{ height: 1000 }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          // style={{ margin: '50px' }}
          className="callenderCss"
          components={{
            toolbar: CustomToolbar, // Use the custom toolbar
          }}
          eventPropGetter={eventStyleGetter} // Use the custom event style getter
          dayPropGetter={dayStyleGetter} // Use the custom day style getter
          
        />
      </div>
    </div>
  );
};

export default BigCalendarComponent;
