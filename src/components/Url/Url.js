export const updateURLParam = (key, value) => {
  const search = new URLSearchParams(window.location.search);
  value.length ? search.set(key, value) : search.delete(key);
  const url =
    search.toString().length > 0
      ? `${window.location.pathname}?${search}`
      : window.location.pathname;
  window.history.replaceState(null, document.title, url);
};

export const getURLParam = (key) => {
  const search = new URLSearchParams(window.location.search);
  const value = search.get(key);
  return value;
};

export const appendURLParam = (key, value) => {
  const search = new URLSearchParams(window.location.search);
  const oldValue = search.get(key);
  if (oldValue && oldValue.includes(value)) return;
  const newValue = oldValue ? `${oldValue},${value}` : value;
  search.set(key, newValue);
  newValue.length ? search.set(key, newValue) : search.delete(key);
  const url =
    search.toString().length > 0
      ? `${window.location.pathname}?${search}`
      : window.location.pathname;
  window.history.replaceState(null, document.title, url);
}
