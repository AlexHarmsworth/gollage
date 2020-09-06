const ENDPOINTS = {
  SEARCH: "https://api.giphy.com/v1/gifs/search",
  IDS: "https://api.giphy.com/v1/gifs",
};

export const getSearch = async ({ query = "", offset = 0 }) => {
  const res = await fetch(
    `${ENDPOINTS.SEARCH}?api_key=${process.env.REACT_APP_API_KEY}&q=${query}&offset=${offset}`
  );
  const json = await res.json();
  return json;
};

export const getIDS = async (query = "") => {
  const res = await fetch(
    `${ENDPOINTS.IDS}?api_key=${process.env.REACT_APP_API_KEY}&ids=${query}`
  );
  const json = await res.json();
  return json;
};

export const extractData = (gif) => {
  return {
    url: gif.images.original.mp4,
    id: gif.id,
    title: gif.title,
  };
};
