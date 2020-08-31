import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getIDS, extractData } from "../../services/API/API";
import Cache from "../../services/Cache/cache";
import Card from "../Card/Card";
import Delete from "../Delete/Delete";

function Board(props) {
  const cacheKey = "boardResults";
  const cache = new Cache({ cacheKey });
  const isCacheValid = cache.validateCache(props.gifs);
  const [data, setData] = useState(isCacheValid ? cache.get(cacheKey) : []);

  useEffect(() => {
    const loadGifs = async () => {
      const res = await getIDS(props.gifs);
      const cleanArr = res.data.map(extractData);
      setData(cleanArr);
      cache.set(cleanArr);
    };

    if (props.gifs && !isCacheValid) {
      loadGifs();
    }
  });

  return (
    <div className="c-board">
      {data.map((gif, index) => (
        <div key={gif.title + index} data-id={gif.id} className="c-board-card">
          <Card title={gif.title} url={gif.url} />
          <Delete class={"c-board-delete"} />
        </div>
      ))}
    </div>
  );
}

Board.propTypes = {
  gifs: PropTypes.string,
};

export default Board;
