import moment from "moment";
import { ImgContainer, InfoContainer } from "./styles/style";

interface CardProps {
  key?: React.Key | null | undefined;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  title: string;
  anoLacamento: string;
  votos: number | string;
  urlImg: string;
}

const IMG = import.meta.env.VITE_IMG;

export function CardSlide({key, title, votos, urlImg, anoLacamento, onClick}: CardProps) {
  return (
    <ImgContainer
      key={key}
      className={`keen-slider__slide number-slide${key}`}
      onClick={onClick}
    >
      <InfoContainer>
        <span>{title}</span>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>{moment(anoLacamento).format('YYYY')}</p>
          <p>{votos}</p>
        </div>
      </InfoContainer>
      <img src={urlImg && IMG + urlImg} alt={title} />
    </ImgContainer>
  );
}
