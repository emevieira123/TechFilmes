import axios from "axios";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const traducao = import.meta.env.VITE_TRADUCAO;

export default async function getTrailer(id: number | string, type: string) {
  const result = await axios.get(`${moviesURL}/${type}/${id}/videos?${apiKey + traducao}`)
  .then((resp) => resp.data.results);

  return result;
}
