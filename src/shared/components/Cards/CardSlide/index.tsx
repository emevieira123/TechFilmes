import moment from "moment";
import { ImgContainer, InfoContainer } from "./styles/style";

interface CardProps {
  index: number;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  title: string;
  anoLacamento: string;
  votos: number | string;
  urlImg: string;
}

const IMG = import.meta.env.VITE_IMG;

export function CardSlide({index, title, votos, urlImg, anoLacamento, onClick}: CardProps) {
  return (
    <ImgContainer
      className={`keen-slider__slide number-slide${index}`}
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
