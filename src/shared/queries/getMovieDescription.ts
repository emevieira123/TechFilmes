import axios from "axios";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const traducao = import.meta.env.VITE_TRADUCAO;

export default async function getMovieDescription(id: number | string) {
  const result = await axios.get(`${moviesURL}/movie/${id}?${apiKey + traducao}`)
  .then((resp) => resp.data);

  return result;
}
