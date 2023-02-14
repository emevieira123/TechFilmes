import { useQuery } from "react-query";
import getSerieDescription from "../queries/getSerieDescription";

const seriesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const traducao = import.meta.env.VITE_TRADUCAO;

export default function useGetSerieDescription(id?: number | string) {
  const resultQuery = useQuery(
    [`${seriesURL}/tv/${id}?${apiKey + traducao}`],
    () => getSerieDescription(id!), {
    onError: (error) => {
      console.log(error);
    },
  });

  return resultQuery;
}
