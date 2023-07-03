import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Fact = ({ text = "I like winter more than summer" }) => {
  return (
    <div className="fact">
      <p className="i-like-winter-more">{text}</p>
    </div>
  );
};

Fact.propTypes = {
  text: PropTypes.string,
};
