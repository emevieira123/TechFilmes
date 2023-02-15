import { useParams } from "react-router-dom"
import useGetMovieDescription from "../../../../shared/hooks/useGetMovieDescription";
import { Description } from "../../../../shared/components/Description";

export function MovieDescription() {
  const { id } = useParams();
  const { data: MovieDescription, isLoading } = useGetMovieDescription(id!);

  return (
    <>
      <Description dataSource={MovieDescription} id={Number(id)} loading={isLoading} />
    </>
  )
}
