import React from "react";
import PropTypes from "prop-types";

function Gif(props) {
  return <img className="c-gif" alt={props.title} src={props.url} loading="lazy" />;
}

Gif.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Gif;
