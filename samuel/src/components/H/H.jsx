import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const H = ({
    className,
    text = "projects",
    lineStrokeClassName,
    lineStroke = "https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/line-7--stroke--1.svg",
}) => {
    return (
        <div className={`h ${className}`}>
            <div className="div">
                <div className="element">#</div>
                <div className="projects">{text}</div>
            </div>
            <img className={`line-stroke ${lineStrokeClassName} `} alt="Line stroke" src={lineStroke} />
        </div>
    );
};

H.propTypes = {
    text: PropTypes.string,
    lineStroke: PropTypes.string,
}