import PropTypes from "prop-types;";
import React from "react";
import "./style.css"

export const Block = ({
    className,
    text = "Languages",
    text1 = "Typecript",
    text2 = "Python",
    text3 = "Java",
    hasJavascript = true,
}) => {
    return (
        <div className={`block ${className}`}>
            <div className="languages-wrapper">
                <div className="languages">{text}</div>
            </div>
            <img
              className="line"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/line-13-5.svg"
            />
            <div className="frame-2">
                <div className="frame-3">
                    <div className="text-wrapper">{text1}</div>
                    <div className="text-wrapper">{text2}</div>
                </div>
                <div className="frame-3">
                    <div className="text-wrapper">{text3}</div>
                    {hasJavascript && <div className="text-wrapper">JavaScript</div>}
                </div>
            </div>
        </div>
    );
};

Block.prototype = {
    text: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
    text3: PropTypes.string,
    hasJavascript: PropTypes.bool,
};