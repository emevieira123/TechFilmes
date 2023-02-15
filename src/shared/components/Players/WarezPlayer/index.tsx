import { Row } from "antd";
import { ButtonAssistirContainer, ContainerPlayer } from "./style";
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface WarezPlayerProps {
  imdbId: string;
  value: boolean;
  setValue: (value: React.SetStateAction<boolean>) => void;
}

export function WarezPlayer({ imdbId, value, setValue }: WarezPlayerProps) {
  return (
    <Row style={{ padding: '2rem 3rem' }}>
      {
        !value &&
        <ButtonAssistirContainer>
          <button onClick={() => setValue(true)}>Assistir Online</button>
        </ButtonAssistirContainer>
      }
      {
        value &&
        <ContainerPlayer>
          <span onClick={() => setValue(false)}><AiOutlineCloseCircle size={20} /></span>
          <iframe
            style={{ width: '100%', height: '100vh', border: '0' }}
            className="w-auto sm:w-[80%] h-60 sm:h-80 sm:mx-4 sm:mb-4"
            src={`https://embed.warezcdn.net/filme/${imdbId}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </ContainerPlayer>
      }
    </Row>
  );
}
