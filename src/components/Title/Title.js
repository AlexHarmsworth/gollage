import React, { useState } from "react";
import { updateURLParam, getURLParam } from "../Url/Url";

function Title() {
  const titleKey = "title";
  const defaultValue = getURLParam(titleKey) || "Gollage";
  const [value, setValue] = useState(defaultValue);
  const handleTitleChange = ({ target }) => {
    setValue(target.value);
    updateURLParam(titleKey, target.value);
  };

  return (
    <input
      className="c-title"
      value={value}
      onChange={handleTitleChange}
    ></input>
  );
}

export default Title;
