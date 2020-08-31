import React from "react";
import { appendURLParam } from "../../services/Url/Url";
import PropTypes from "prop-types";

function Save(props) {
  const handleClick = ({ target }) => {
    const gif = target.closest('[data-id]');
    const gifID = gif.dataset.id;
    appendURLParam("ids", gifID);
    target.remove();
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
