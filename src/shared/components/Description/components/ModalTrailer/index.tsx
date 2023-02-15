import ReactPlayer from "react-player";
import useGetTrailer from "../../../../hooks/useGetTrailer";
import { ModalTitle, ModalTrailerStyle } from "./style";

interface ModalTrailerType {
  visible: boolean;
  id: number | string;
  closeModal: () => void;
}

export function ModalTrailer({ id, visible, closeModal }: ModalTrailerType) {
  const { data, isLoading } = useGetTrailer(id, 'movie');
  console.log(data);
  const TrailerData = data?.filter((item: any) => item)
  console.log('TrailerData', TrailerData);

  return (
    <ModalTrailerStyle
      title={
        <ModalTitle>
          <strong>{`${TrailerData && TrailerData[0]?.name}`}</strong>
          <span onClick={closeModal}>X</span>
        </ModalTitle>
      }
      open={visible}
      footer={false}
      onCancel={closeModal}
      closable={false}
    >
      {
        !isLoading && TrailerData ?
        <ReactPlayer
          url={`https://www.youtube.com/embed/${TrailerData && TrailerData[0]?.key}`}
          controls={true}
        />
        :
        <span>O trailer ainda não está disponível</span>
      }

    </ModalTrailerStyle>
  );
}
