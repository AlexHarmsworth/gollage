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
