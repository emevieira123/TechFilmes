import { useQuery } from "react-query";
import getMovieDescription from "../queries/getMovieDescription";
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const traducao = import.meta.env.VITE_TRADUCAO;

export default function useGetMovieDescription(id?: number | string) {
  const resultQuery = useQuery(
    [`${moviesURL}/movie/${id}?${apiKey + traducao}`],
    () => getMovieDescription(id!), {
    onError: (error) => {
      console.log(error);
    },
  });

  return resultQuery;
}
