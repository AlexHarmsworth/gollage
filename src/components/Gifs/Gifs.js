import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getSearch, getIDS, extractData } from "../../services/API/API";
import Gif from "../Gif/Gif";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import LazyLoading from "../../services/LazyLoading/LazyLoading";

const randomInt = () => Math.floor(Math.random() * 5);

const useStyles = makeStyles(() => ({
  container: {
    columns: "3 400px",
    columnGap: "1rem",
    backgroundColor: "transparent",
  },
  skeleton: {
    borderRadius: "4px",
  },
}));

function Gifs({ query, viewMode }) {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    const loadGifs = async () => {
      const offset = randomInt();
      const res = viewMode
        ? await getIDS(query)
        : await getSearch({ query, offset });
      const cleanArr = res.data.map(extractData);
      setData(cleanArr);
      setLoading(false);
      LazyLoading();
    };

    if (query) {
      setLoading(true);
      loadGifs();
    } else {
      setData([]);
    }
  }, [query, viewMode]);

  if (loading) {
    return <Skeleton className={classes.skeleton} variant="rect" height="100vh" animation="pulse" />;
  } else {
    return (
      <div className={classes.container}>
        {data.map((gif, index) => {
          return (
            <Gif
              key={index}
              title={gif.title}
              url={gif.url}
              id={gif.id}
              still={gif.still}
              viewMode={viewMode}
            />
          );
        })}
      </div>
    );
  }
}

Gifs.propTypes = {
  query: PropTypes.string,
  type: PropTypes.string,
};

export default Gifs;
