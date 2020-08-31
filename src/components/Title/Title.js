import React, { useState, useEffect } from "react";
import { updateURLParam, getURLParam } from "../../services/Url/Url";

function Title() {
  const titleKey = "title";
  const defaultValue = getURLParam(titleKey) || "Gollage";
  const [value, setValue] = useState(defaultValue);
  useEffect(() => updateURLParam(titleKey, value));

  return (
    <input
      className="c-title"
      value={value}
      onChange={({ target }) => setValue(target.value)}
    ></input>
  );
}

export default Title;
