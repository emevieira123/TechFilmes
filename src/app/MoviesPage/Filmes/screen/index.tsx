import { CardList } from "../../../../shared/components/Cards/CardList";
import useGetMovies from "../../../../shared/hooks/useGetMovies";

export function Filmes() {
  const { data: MoviesData, isLoading } = useGetMovies('popular');
  console.log('MoviesData', MoviesData);

  return (
    <>
      <CardList
        dataSource={MoviesData}
        loading={isLoading}
        type="filmes"
      />
    </>
  );
}
