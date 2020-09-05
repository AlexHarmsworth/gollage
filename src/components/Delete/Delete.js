import React from "react";
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { deleteURLParamValue } from "../../services/Url/Url";
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

function Delete() {
  const classes = useStyles();

  const handleClick = ({ target }) => {
    const gif = target.closest("[data-id]");
    const gifID = gif.dataset.id;
    deleteURLParamValue("ids", gifID);
    gif.style.opacity = "0";
    gif.addEventListener("animationend", function() {
      this.style.display = "none";
    })
  };

  return (
    <IconButton className={classes.root} onClick={handleClick}>
      <HighlightOffOutlinedIcon fontSize="large" />
    </IconButton>
  );
}

Delete.propTypes = {
  class: PropTypes.string,
};

export default Delete;
