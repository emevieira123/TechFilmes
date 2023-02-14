import axios from "axios";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;
const traducao = import.meta.env.VITE_TRADUCAO;

export default function getSearch(type: string, query: string) {
  return axios
    .get(`${searchURL}${type}?${apiKey + traducao}&query=${query}`)
    .then((resp) => resp.data.results);
}
