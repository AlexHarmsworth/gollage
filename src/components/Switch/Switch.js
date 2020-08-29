import React from "react";
import PropTypes from "prop-types";

function Switch(props) {
  return (
    <label className="c-switch">
      <input className="c-switch-input" type="checkbox" defaultChecked={props.showBoard} onChange={props.callback}></input>
      <span className="c-switch-slider --round"></span>
    </label>
  );
}

Switch.propTypes = {
  showBoard: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Switch;
