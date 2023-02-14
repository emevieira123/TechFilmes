import { useQuery } from "react-query";
import getSearch from "../queries/getSearch";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;
const traducao = import.meta.env.VITE_TRADUCAO;

export default function useGetSearch(type: string, query: string) {
  const resultQuery = useQuery(
    [`${searchURL}${type}?${apiKey + traducao}&query=${query}`],
    () => getSearch(type, query), {
    onError: (error) => {
      console.log(error);
    },
  });

  return resultQuery;
}
