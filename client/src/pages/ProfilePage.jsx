import React from "react";
import { useState, useEffect } from "react";
import { attendanceLoadAll } from "../services/attendances";
import { userLoad } from "../services/authentication";
import UserAttendedEvents from "../components/UserAttendedEvents";
import ProfileComponent from "../components/ProfileComponent";
import { useAuthContext } from "../context/authentication";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [attendances, setAttendances] = useState([]);
  const [user, setUser] = useState([]);
  const { authToken } = useAuthContext();

  useEffect(() => {
    attendanceLoadAll(authToken).then((data) => {
      console.log(data.attendances);
      setAttendances(data.attendances);
    });
  }, [authToken]);

  const { id } = useParams();

  useEffect(() => {
    userLoad(id, authToken).then((data) => setUser(data.user));
  }, [id, authToken]);

  return (
    <div>
      {user && <ProfileComponent user={user} />}
      <h1>Your favorite events</h1>
      {attendances.length && <UserAttendedEvents attendances={attendances} />}
    </div>
  );
};

export default Profile;
