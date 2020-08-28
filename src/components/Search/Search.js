import React, { useState } from "react";
import { getSearch } from "../API/API";
import Card from "../Card/Card";
import Save from "../Save/Save";

function Search() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const randomInt = () => Math.floor(Math.random() * 100);

  const handleClick = async () => {
    const offset = randomInt();
    const res = await getSearch({ query, offset });
    const cleanArr = res.data.map((gif) => {
      return {
        url: gif.images.original.url,
        id: gif.id,
        title: gif.title,
      };
    });
    setData(cleanArr);
  };

  return (
    <div className="c-search">
      <div className="c-search-area">
        <input
          className="c-search-input"
          placeholder="Search for gifs!"
          onChange={({ target }) => setQuery(target.value)}
        ></input>
        <button type="submit" className="c-search-button" onClick={handleClick}>
          Go!
        </button>
      </div>
      <div className="c-search-results">
        {data.map((gif, index) => (
          <div key={gif.title + index} className="c-search-card">
            <Card title={gif.title} url={gif.url} id={gif.id} />
            <Save class={"c-search-save"} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
