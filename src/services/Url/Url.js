const buildUrl = (search) => {
  return search.toString().length > 0 ? `${window.location.pathname}?${search}` : window.location.pathname;
}

const updateUrl = (url) => {
  window.history.replaceState(null, document.title, url);
}

const setUrlParam = (key, value) => {
  const search = new URLSearchParams(window.location.search);
  value ? search.set(key, value) : search.delete(key);
  return search;
}

export const getURLParam = (key) => {
  const search = new URLSearchParams(window.location.search);
  return search.get(key);
};

export const updateURLParam = (key, value) => {
  const search = setUrlParam(key, value);
  const url = buildUrl(search);
  updateUrl(url);
};

export const appendURLParam = (key, value) => {
  const currentValue = getURLParam(key);
  if (currentValue && currentValue.includes(value)) return;
  const newValue = currentValue ? `${currentValue},${value}` : value;
  updateURLParam(key, newValue);
}

export const deleteURLParamValue = (key, value) => {
  const currentValueArr = getURLParam(key).split(",");
  const newValue = currentValueArr.filter(id => id !== value).join(",");
  updateURLParam(key, newValue);
}
