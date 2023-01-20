import React from "react";
import EventCard from "./EventCard";

const UserAttendedEvents = ({ attendances }) => {
  return (
    <div className=" flex-row">
      {attendances.length &&
        attendances.map((attendance) => {
          return (
            attendance && (
              <EventCard
                key={attendance._id}
                event={attendance.attendingEvent}
              />
            )
          );
        })}
    </div>
  );
};

export default UserAttendedEvents;
