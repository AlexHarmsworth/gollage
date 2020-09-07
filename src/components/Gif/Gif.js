import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Save from "../Save/Save";
import Delete from "../Delete/Delete";
import { Card, CardMedia, Fade } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: "1rem",
    position: "relative",
    minHeight: "150px",
  },
  video: {
    width: "100%",
  },
}));

function Gif(props) {
  const classes = useStyles();
  const animationDuration = 500;

  return (
    <Fade in timeout={animationDuration}>
      <Card elevation={5} className={classes.root} data-id={props.id}>
        <CardMedia
          className={classes.video}
          title={props.title}
          alt={props.title}
          component="video"
          data-src={props.url}
          autoPlay
          loop
          muted
          playsInline
        />
        {props.viewMode ? (
          <Delete animation={animationDuration} />
        ) : (
          <Save animation={animationDuration} />
        )}
      </Card>
    </Fade>
  );
}

Gif.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Gif;
