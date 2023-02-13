import { useQuery } from "react-query";
import getMovies from "../query/getMovies";
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const traducao = import.meta.env.VITE_TRADUCAO;

export default function useGetMovies(typeList: string) {
  const resultQuery = useQuery(
    [`${moviesURL}/movie/now_playing?${apiKey + traducao}`],
    () => getMovies(typeList), {
    onError: (error) => {
      console.log(error);
    },
  });

  return resultQuery;
}
