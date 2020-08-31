import React from "react";
import PropTypes from "prop-types";
import { deleteURLParamValue } from "../../services/Url/Url";

function Delete(props) {
  const handleClick = ({ target }) => {
    const gif = target.closest("[data-id]");
    gif.remove();    
    deleteURLParamValue("ids", gif.dataset.id);
  };

  return (
    <span
      className={"o-icon --delete " + props.class}
      onClick={handleClick}
    ></span>
  );
}

Delete.propTypes = {
  class: PropTypes.string,
};

export default Delete;
