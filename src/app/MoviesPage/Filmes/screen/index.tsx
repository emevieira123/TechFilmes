import { useState } from "react";
import { CardList } from "../../../../shared/components/Cards/CardList";
import { SimplePagination } from "../../../../shared/components/Paginations/SimplePagination";
import useGetMovies from "../../../../shared/hooks/useGetMovies";

export function Filmes() {
  const [page, setPage] = useState(1);
  const { data: MoviesData, isLoading } = useGetMovies('popular', page);
  console.log('MoviesData', MoviesData);

  return (
    <>
      <CardList
        dataSource={MoviesData?.results}
        loading={isLoading}
        type="filmes"
      />

      <SimplePagination
        page={page}
        setPage={setPage}
        previousDisabled={page === 1}
        nextDisabled={page === MoviesData?.total_pages}
      />
    </>
  );
}
