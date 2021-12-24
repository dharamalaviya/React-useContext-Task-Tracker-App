import React, { createContext, useReducer } from "react";
import AppReducer from "../context/AppReducer.js";
const initialState = {
  tasks: [
    {
      id: 1,
      text: "Tasks1",
      day: "meeting 5th at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Doctor appoiment",
      day: "Feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 3,
      text: "food appoiment",
      day: "Feb 5th at 2:30pm",
      reminder: false
    }
  ]
};

//Create Context

export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
