import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getIDS, extractData } from "../../services/API/API";
import Cache from "../../services/Cache/cache";
import Gif from "../Gif/Gif";
import Delete from "../Delete/Delete";

const cacheKey = "boardResults";
const cache = new Cache({ cacheKey });

function Board({ gifs }) {
  const [data, setData] = useState(cache.validateCache(gifs) ? cache.get(cacheKey) : []);

  useEffect(() => {
    const loadGifs = async () => {
      const res = await getIDS(gifs);
      const cleanArr = res.data.map(extractData);
      setData(cleanArr);
      cache.set(cleanArr);
    };

    if (gifs && !cache.validateCache(gifs)) {
      loadGifs();
    }
  });

  return (
    <div className="c-board">
      {data.map((gif, index) => (
        <div key={gif.title + index} data-id={gif.id} className="c-board-card">
          <Gif title={gif.title} url={gif.url} />
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
