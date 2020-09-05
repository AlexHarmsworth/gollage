import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getSearch, getIDS, extractData } from "../../services/API/API";
import Gif from "../Gif/Gif";
import { makeStyles } from "@material-ui/core/styles";

const randomInt = () => Math.floor(Math.random() * 5);

const useStyles = makeStyles(() => ({
  container: {
    columns: "3 400px",
    columnGap: "1rem",
    backgroundColor: "transparent",
  },
}));

function Gifs({ query, viewMode }) {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadGifs = async () => {
      if (!query) {
        setData([]);
        return;
      }

      const offset = randomInt();
      const res = viewMode
        ? await getIDS(query)
        : await getSearch({ query, offset });
      const cleanArr = res.data.map(extractData);
      setData(cleanArr);
    };
    loadGifs();
  }, [query, viewMode]);

  return (
    <div className={classes.container}>
      {data.map((gif, index) => {
        return (
          <Gif
            key={index}
            title={gif.title}
            url={gif.url}
            id={gif.id}
            viewMode={viewMode}
          />
        );
      })}
    </div>
  );
}

Gifs.propTypes = {
  query: PropTypes.string,
  type: PropTypes.string,
};

export default Gifs;
