import moment from "moment"
import { useNavigate } from "react-router-dom";
import { URLS } from "../../../../infra/URLS";
import { CardsType } from "../../../types/CardsType";
import { Container, GripStyle, InfoContainer } from "./styles/style"

const IMG = import.meta.env.VITE_IMG;

import imageNotFound from '../../../../assets/image_not_found.png';

interface CardListProps {
  loading?: boolean;
  dataSource: CardsType[];
  type?: string;
}

export function CardList({ loading, dataSource, type }: CardListProps) {
  const navigate = useNavigate();

  function handleDetalhesFilmeOuSerie(id: number) {
    if(type === 'filmes') {
        navigate(URLS.FILME_ID.replace(':id', id.toString()))
    } else {
      navigate(URLS.SERIE_ID.replace(':id', id.toString()))
    }
  }

  return (
    <Container>
      {
        loading ? (<span>Carregando...</span>) :
          (
            dataSource?.map((movie: CardsType) => {
              return (
                <GripStyle
                  key={movie.id}
                  theme={`url(${movie.poster_path ? IMG + movie.poster_path: imageNotFound})`}
                  onClick={() => handleDetalhesFilmeOuSerie(movie.id)}
                >
                  <div  style={{height: '75%', width: '100%'}}></div>
                  <InfoContainer>
                    <span>{movie.title || movie.name}</span>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <p>{moment(movie.release_date).format('YYYY')}</p>
                      <p>{movie.vote_average}</p>
                    </div>
                  </InfoContainer>
                </GripStyle>
              )
            })
          )
      }
    </Container >
  )
}
