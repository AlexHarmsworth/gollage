import React from "react";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { appendURLParam } from "../../services/Url/Url";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  root: {
    top: "0",
    color: "#fff",
    right: "0",
    position: "absolute",
    fontSize: "2.5rem",
    cursor: "pointer",
  },
}));

function Save() {
  const classes = useStyles();

  const handleClick = ({ target }) => {
    const gif = target.closest("[data-id]");
    const gifID = gif.dataset.id;
    appendURLParam("ids", gifID);
    gif.style.opacity = "0";
    gif.addEventListener("animationend", function () {
      this.style.display = "none";
    });
  };

  return (
    <IconButton className={classes.root} onClick={handleClick}>
      <AddCircleOutlineOutlinedIcon fontSize="large" />
    </IconButton>
  );
}

Save.propTypes = {
  class: PropTypes.string,
};

export default Save;
