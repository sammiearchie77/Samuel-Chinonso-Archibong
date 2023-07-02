import PropTypes from "prop-types";
import React from "react";
import "./style.css"

export const Dots = ({ className, hasFrame = true }) => {
    return (
        <div className={`dots ${className}`}>
            <div className="frame">
                <div className="ellipse" />
                <div className="ellipse" />
                <div className="ellipse" />
                <div className="ellipse" />
                <div className="ellipse" />
            </div>
            <div className="frame">
                <div className="ellipse" />
                <div className="ellipse" />
                <div className="ellipse" />
                <div className="ellipse" />
                <div className="ellipse" />
            </div>
            <div className="frame">
                <div className="ellipse" />
                <div className="ellipse" />
                <div className="ellipse" />
                <div className="ellipse" />
                <div className="ellipse" />
            </div>
            {hasFrame && (
                <div className="frame">
                    <div className="ellipse" />
                    <div className="ellipse" />
                    <div className="ellipse" />
                    <div className="ellipse" />
                    <div className="ellipse" />
                </div>
            )}

            <div className="frame">
                <div className="ellipse" />
                <div className="ellipse" />
                <div className="ellipse" />
                <div className="ellipse" />
                <div className="ellipse" />
            </div>
        </div>
    );
};

Dots.propTypes = {
    hasFrame: PropTypes.bool,
};