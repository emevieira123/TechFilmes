import { useQuery } from "react-query";
import getSeries from "../queries/getSeries";
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const traducao = import.meta.env.VITE_TRADUCAO;

export default function useGetSeries(page?: number) {
  const resultQuery = useQuery(
    [`${moviesURL}/tv/popular?${apiKey + traducao}`, {
      params: { page }
    }],
    () => getSeries(page!), {
      keepPreviousData: true,
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return resultQuery;
}
