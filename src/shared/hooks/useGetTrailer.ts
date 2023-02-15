import { useQuery } from "react-query";
import getTrailer from "../queries/getTrailer";
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const traducao = import.meta.env.VITE_TRADUCAO;

export default function useGetTrailer(id?: number | string, type?: string) {
  const resultQuery = useQuery(
    [`${moviesURL}/${type}/${id}/videos?${apiKey + traducao}`],
    () => getTrailer(id!, type!), {
    onError: (error) => {
      console.log(error);
    },
  });

  return resultQuery;
}
