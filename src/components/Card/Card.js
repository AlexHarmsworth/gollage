import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  return <img alt={props.title} src={props.url} data-id={props.id} />;
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
