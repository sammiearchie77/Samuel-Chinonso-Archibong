import PropTypes from "prop-types";
import { useReducer } from "react";
import { Twitter } from "../../icons/Twitter";
import "./style.css";

export const Media = ({
    stateProp,
    icon = <Twitter className="twitter-instance" />, text = "@geecoding" }) => {
    const [state, dispatch] = useReducer(reducer, {
        state: stateProp || "default",
    });

    return (
        <div
            className="media"
            onMouseLeave={() => dispatch("mouse_leave")}
            onMouseEnter={() => dispatch("mouse_enter")}
        >
            {icon}
            <div className={`elias ${state.state}`}>{text}</div>
        </div>
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

Media.propTypes = {
    stateProp: PropTypes.oneOf(["hover", "default"]),
    text: PropTypes.string,
};