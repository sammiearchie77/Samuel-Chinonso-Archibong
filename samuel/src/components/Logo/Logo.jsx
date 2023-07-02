import PropTypes from "prop-types";
import React from "react";
import "./style.css"

export const Logo = ({
    style,
    className,
    overlapGroupClassName,
    unionClassName,
    union = "https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/union-9.svg",
    unionClassNameOverride,
    img = "https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/union-8.svg",
}) => {
    return (
        <div className={`logo style-${style} ${className}`}>
            { style === "outline" && (
                <div className={`overlap-group ${overlapGroupClassName}`}>
                    <img className={`union ${unionClassName}`} alt="Union" src={union} />
                    <img className={`union ${unionClassNameOverride}`} alt="Union" src={img} />
                </div>
            )}
        </div>
    );
};

Logo.propTypes = {
    style: PropTypes.oneOf(["outline", "default"]),
    union: PropTypes.string,
    img: PropTypes.string
};