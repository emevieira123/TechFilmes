import axios from "axios";

const seriesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const traducao = import.meta.env.VITE_TRADUCAO;

export default async function getSerieDescription(id: number | string) {
  const result = await axios.get(`${seriesURL}/tv/${id}?${apiKey + traducao}`)
  .then((resp) => resp.data);

  return result;
}
