/* eslint-disable default-case */
import PropTypes from "prop-types";
import { React,useReducer } from "react";
import "./style.css"

export const LanguageSwitcher = ({ stateProp }) => {
    const [state, dispatch] = useReducer(reducer, {
        state: stateProp || "default",
    });

    return (
        <div
          className="language-switcher"
          onMouseLeave={()=> {
            dispatch("mouse_leave");
          }}
          onMouseEnter={()=> {
            dispatch("mouse_enter");
          }}
        >
            <div className="EN">EN</div>
            <div className={`overlap-group-wrapper ${state.state}`}>
                <div className="overlap-group-2">
                    <img
                      className="line-3"
                      alt="Line"
                      src={
                        state.state === "open"
                        ? "https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/line-14-1.svg"
                        : "https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/line-14-3.svg"
                      }
                    />
                    <img
                      className="line-4"
                      alt="Line"
                      src={
                        state.state === "open"
                          ? "https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/line-15-1.svg"
                          : "https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/line-15-3.svg"
                      }
                    />
                </div>
            </div>
            <div className={`frame-13 state-${state.state}`}>
                <div className="RU">RU</div>
                <div className="UA">UA</div>
            </div>
        </div>
    );
};

function reducer(state, action) {
    switch (action) {
        case "mouse_enter":
            return {
                ...state,
                state: "open",
            };
        case "mouse_leave":
            return {
                ...state,
                state: "default",
            };
    }

    return state;
}

LanguageSwitcher.propTypes = {
    stateProp: PropTypes.oneOf(["open", "default"]),
};