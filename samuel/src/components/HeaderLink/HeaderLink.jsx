/* eslint-disable default-case */
import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const HeaderLink = ({ stateProp, text = "home", to }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  return (
    <Link
      className="header-link"
      to={to}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className={`element-2 state-0-${state.state}`}>#</div>
      <div className={`home-2 state-1-${state.state}`}>{text}</div>
    </Link>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

HeaderLink.propTypes = {
  stateProp: PropTypes.oneOf(["hover", "active", "default"]),
  text: PropTypes.string,
  to: PropTypes.string,
};