import { Modal, Row } from "antd";
import ReactPlayer from "react-player";
import styled from "styled-components";
import useGetTrailer from "../../../../../shared/hooks/useGetTrailer";

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

      {/* <iframe
        style={{width: '600px', height: '400px', border: '0'}}
        className="w-auto sm:w-[80%] h-60 sm:h-80 sm:mx-4 sm:mb-4"
        src={
          url.includes("/watch?v=")
            ? url.replace("/watch?v=", "/embed/")
            : url
        }
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}

      {/* <iframe
        style={{width: '600px', height: '400px', border: '0'}}
        className="w-auto sm:w-[80%] h-60 sm:h-80 sm:mx-4 sm:mb-4"
        src="https://embed.warezcdn.net/serie/tt3107288"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}

    </ModalTrailerStyle>
  );
}

const ModalTrailerStyle = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;

  .ant-modal-body,
  .ant-modal-content,
  .ant-modal-header {
    background-color: ${props => props.theme.gray900};
  }

  .ant-modal-title {
    color: ${props => props.theme.white};
  }
`;

const ModalTitle = styled(Row)`
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 1.25rem;
  }
  span {
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.yellowDark};
    }
  }
`;
