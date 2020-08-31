import config from "../../config";

export const getSearch = async ({ query = "", offset = 0 }) => {
  const res = await fetch(
    `${config.SEARCH_ENDPOINT}?api_key=${config.API_KEY}&q=${query}&offset=${offset}`
  );
  const json = await res.json();
  return json;
};

export const getIDS = async (query = "") => {
  const res = await fetch(
    `${config.IDS_ENDPOINT}?api_key=${config.API_KEY}&ids=${query}`
  );
  const json = await res.json();
  return json;
};

export const extractData = (gif) => {
  return {
    url: gif.images.original.url,
    id: gif.id,
    title: gif.title,
  };
};
