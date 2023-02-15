import { Pagination } from "./styles/style";

interface SimplePaginationProps {
  page: number;
  setPage: (value: React.SetStateAction<number>) => void;
  previousDisabled: boolean;
  nextDisabled: boolean;
}

export function SimplePagination({page, setPage, previousDisabled, nextDisabled}: SimplePaginationProps) {
  return (
    <Pagination>
      <button
        disabled={previousDisabled}
        onClick={() => setPage((old) => Math.max(old - 1, 1))}>Anterior</button>
      <span>Pagina: {page}</span>
      <button
        disabled={nextDisabled}
        onClick={() => setPage(old => (old + 1))}>Proxima</button>
    </Pagination>
  );
}
