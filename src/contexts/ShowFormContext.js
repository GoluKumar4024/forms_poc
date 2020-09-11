import React, { Component } from "react";
import contextCreator from "./contextCreator";

const showFormContextReducer = (state, action) => {
  switch (action.type) {
    case "showForm":
      return true;
    case "hideForm":
      return false;
  }
};

const showForm = (dispatch) => {
  return () => dispatch({ type: "showForm" });
};

const hideForm = (dispatch) => {
  return () => dispatch({ type: "hideForm" });
};

export const { Context, Provider } = contextCreator(
  showFormContextReducer,
  { showForm, hideForm },
  false
);
