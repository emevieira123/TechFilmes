import { useQuery } from "react-query";
import getSeriesPopular from "../query/getSeriesPopular";
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const traducao = import.meta.env.VITE_TRADUCAO;

export default function useGetSeriesPopular() {
  const resultQuery = useQuery(
    [`${moviesURL}/tv/popular?${apiKey + traducao}`],
    getSeriesPopular,
    {
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return resultQuery;
}
