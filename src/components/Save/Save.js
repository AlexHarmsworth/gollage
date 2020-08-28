import React from "react";
import { appendURLParam } from "../Url/Url";
import PropTypes from "prop-types";

function Save(props) {
  const handleClick = ({ target }) => {
    const gif = target.previousElementSibling;
    const gifID = gif.dataset.id;
    appendURLParam("ids", gifID);
  };

  return (
    <span
      className={"o-icon --save " + props.class}
      onClick={handleClick}
    ></span>
  );
}

Save.propTypes = {
  class: PropTypes.string,
};

export default Save;
