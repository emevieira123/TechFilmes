import { useState } from "react";
import { CardList } from "../../../../shared/components/Cards/CardList";
import { SimplePagination } from "../../../../shared/components/Paginations/SimplePagination";
import useGetSeries from "../../../../shared/hooks/useGetSeries";

export function Series() {
  const [page, setPage] = useState(1);
  const { data: SeriesData, isLoading } = useGetSeries(page);
  console.log('SeriesData', SeriesData);

  return (
    <>
      <CardList
        dataSource={SeriesData?.results}
        loading={isLoading}
        type="series"
      />

      <SimplePagination
        page={page}
        setPage={setPage}
        previousDisabled={page === 1}
        nextDisabled={page === SeriesData?.total_pages}
      />
    </>
  );
}
