import axios from "axios";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const traducao = import.meta.env.VITE_TRADUCAO;

export default function getMovies(typeList: string, page: number) {
  return axios
    .get(`${moviesURL}/movie/${typeList}?${apiKey + traducao}`, { params: { page }})
    .then((resp) => resp.data);
}
