import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Save from "../Save/Save";
import Delete from "../Delete/Delete";
import { Paper } from "@material-ui/core";
import { Fade } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: "1rem",
    position: "relative",
  },
  img: {
    width: "100%",
  },
}));

function Gif(props) {
  const classes = useStyles();
  const animationDuration = 500;

  return (
    <Fade in timeout={animationDuration}>
      <Paper
        elevation={5}
        className={classes.root}
        style={props.style}
        data-id={props.id}
      >
        <img
          className={classes.img}
          alt={props.title}
          src={props.url}
          loading="lazy"
        />
        {props.viewMode ? <Delete animation={animationDuration} /> : <Save animation={animationDuration} />}
      </Paper>
    </Fade>
  );
}

Gif.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Gif;
