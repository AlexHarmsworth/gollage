import config from "../../config";

export const getSearch = async ({ query = "", offset = 0}) => {
  const res = await fetch(`${config.SEARCH_ENDPOINT}?api_key=${config.API_KEY}&q=${query}&offset=${offset}`);
  const json = await res.json();
  return json;
};