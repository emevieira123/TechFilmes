import axios from "axios";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const traducao = import.meta.env.VITE_TRADUCAO;

export default function getSeriesPopular() {
  return axios.get(`${moviesURL}/tv/popular?${apiKey + traducao}`).then((resp) => resp.data.results)
}
