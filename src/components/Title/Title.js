import React, { useState, useEffect } from "react";
import { updateURLParam, getURLParam } from "../../services/Url/Url";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const titleKey = "title";
const defaultValue = getURLParam(titleKey) || "Gollage";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: `${theme.spacing(5)}px 0 0 0`,
  },
  h1: {
    fontSize: "8rem",
    textAlign: "center",
    fontFamily: "Permanent Marker, cursive",
  },
}));

function Title({ isEditable }) {
  const classes = useStyles();
  const [value, setValue] = useState(defaultValue);
  useEffect(() => updateURLParam(titleKey, value));

  if (isEditable) {
    return (
      <TextField
        className={classes.root}
        label="Title"
        variant="outlined"
        size="medium"
        fullWidth
        InputProps={{ classes: { input: classes.h1 } }}
        onChange={({ target }) => setValue(target.value)}
        value={value}
      />
    );
  } else {
    return <h1 className={classes.h1}>{value}</h1>;
  }
}

Title.propTypes = {
  isEditable: PropTypes.bool,
};

export default Title;
