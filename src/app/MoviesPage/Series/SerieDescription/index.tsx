import { useParams } from "react-router-dom"
import { Description } from "../../../../shared/components/Description";
import useGetSerieDescription from "./hooks/useGetSerieDescription";

export function SerieDescription() {
  const { id } = useParams();
  const {data: SerieDescription, isLoading} = useGetSerieDescription(id);

  console.log('MovieDescription ', SerieDescription);
  console.log('id ', id);

  return (
    <>
      <Description dataSource={SerieDescription} id={Number(id)} loading={isLoading} />
    </>
  )
}
