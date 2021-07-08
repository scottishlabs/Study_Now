import React, { useContext, useEffect, useRef, useState } from "react";

import TaskView from "./TaskView";
import EventView from "./EventView";

import TodoContext from "../../../../context/todo/todoContext";
import EventContext from "../../../../context/events/eventContext";
import AuthContext from "../../../../context/auth/authContext";
import PageChooser from "./PageChooser";

import "./TaskView.css"

// This is a landing page that the users arrive on when users first log in
const Welcome = () => {
  const userContext = useContext(AuthContext);

  const {
    register,
    loadUser,
    login,
    logout,
    clearErrors,
    user,
    loading: userLoading,
  } = userContext;

  useEffect(() => {
    loadUser();
  }, [loadUser]);


  return (
    <div className="container-fluid  h-100">
      {!userLoading && user !== null ? (
        <div className="d-flex h-100 py-5 flex-column ">
          <div
            className="card shadow mb-5 mx-auto"
            style={{ borderRadius: "15px" }}
          >
            <div className="card-body py-1 px-3">
              <h3 className="text-center m-0 font-weight-bold">
                Welcome, {user.name}.
              </h3>
            </div>
          </div>
          <div className="d-flex flex-row w-100 h-100 align-items-stretch justify-content-center">

            <div
              className="card taskView flex-shrink-0 shadow mr-lg-4"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-4">
                <TaskView />
              </div>
            </div>

            <div className="d-none d-lg-block flex-shrink-1 w-50">
              <PageChooser />
            </div>

          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center ">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
