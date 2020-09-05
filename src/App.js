import React, { useState } from "react";
import Title from "./components/Title/Title";
import Search from "./components/Search/Search";
import Gifs from "./components/Gifs/Gifs";
import { getURLParam } from "./services/Url/Url";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Switch } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  switch: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const defaultGifs = getURLParam("ids");

  const [query, setQuery] = useState(defaultGifs || "");
  let [viewMode, setViewMode] = useState(Boolean(defaultGifs));

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.elements.query.value);
  };

  const handleSwitch = () => {
    setViewMode(viewMode = !viewMode)
    setQuery(viewMode ? getURLParam("ids") || "" : "");
  };

  return (
    <Container component="main">
      <Title isEditable={!viewMode} />
      { !viewMode && <Search callback={handleSearch} /> }
      <Gifs query={query} viewMode={viewMode} />
      <Switch
        checked={viewMode}
        className={classes.switch}
        color="primary"
        inputProps={{ "aria-label": "switch view" }}
        onChange={handleSwitch}
      />
    </Container>
  );
}

export default App;
