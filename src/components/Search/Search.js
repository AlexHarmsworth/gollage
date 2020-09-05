import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, InputBase } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    maxWidth: 400,
    margin: `${theme.spacing(5)}px auto`,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontFamily: "Permanent Marker, cursive",
    fontSize: "14px",
  },
}));

function Search({ callback }) {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root} onSubmit={callback}>
      <InputBase
        className={classes.input}
        placeholder="Search for Gifs!"
        inputProps={{ "aria-label": "search for gifs" }}
        name="query"
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default Search;
