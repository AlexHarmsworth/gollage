import React, { useState } from "react";
import { getSearch, extractData } from "../../services/API/API";
import Cache from "../../services/Cache/cache";
import Gif from "../Gif/Gif";
import Save from "../Save/Save";

function Search() {
  const resultsCacheKey = "searchResults"
  const queryCacheKey = "searchQuery"
  const resultsCache = new Cache({ cacheKey: resultsCacheKey });
  const queryCache = new Cache({ cacheKey: queryCacheKey });
  const [query, setQuery] = useState(queryCache.get(queryCacheKey)[0] || "");
  const [data, setData] = useState(resultsCache.get(resultsCacheKey) || []);
  const randomInt = () => Math.floor(Math.random() * 10);

  const handleClick = async () => {
    const offset = randomInt();
    const res = await getSearch({ query, offset });
    const cleanArr = res.data.map(extractData);
    setData(cleanArr);
    resultsCache.set(cleanArr);
  };

  const handleInput = ({ target }) => {
    setQuery(target.value);
    queryCache.set([target.value]);
  }

  return (
    <div className="c-search">
      <div className="c-search-area">
        <input
          className="c-search-input"
          placeholder="Search for gifs!"
          value={query}
          onChange={handleInput}
          onKeyDown={ ({ key }) => {
            if (key === "Enter") {
              handleClick();
            }
          }}
        ></input>
        <button type="submit" className="c-search-button" onClick={handleClick}>
          Go!
        </button>
      </div>
      <div className="c-search-results">
        {data.map((gif, index) => (
          <div key={gif.title + index} data-id={gif.id} className="c-search-card">
            <Gif title={gif.title} url={gif.url} />
            <Save class={"c-search-save"} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
