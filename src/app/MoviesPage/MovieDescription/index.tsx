import { useParams } from "react-router-dom"
import { slideFilmesMock } from "../../HomePage/__mocks__/slideFilmesMock";
import { IoTimerOutline } from 'react-icons/io5';
import { useState } from "react";
import { ModalTrailer } from "./components/ModalTrailer";
import { DescriptionStyle, DetalhesContainer, MovieDescriptionContainer, MovieInfo } from "./style";
import { Downloads } from "./components/Downloads";
import useGetMovieDescription from "../../../shared/hooks/useGetMovieDescription";
import moment from "moment";

const IMG = import.meta.env.VITE_IMG;

interface GenreType {
  name: string;
}

export function MovieDescription() {
  const [modalTrailer, setModalTrailer] = useState(false);
  const { id } = useParams();
  const { data: MovieDescription, isLoading } = useGetMovieDescription(id!);

  console.log('MovieDescription ', MovieDescription);
  console.log('id ', id);

  let description = MovieDescription?.overview;
  if (description?.length > 400) {
    description = description.substring(0, 400) + '...';
  }

  const handleConverteHoras = (minutos: number) => {
    const horas = Math.floor(minutos / 60);
    const min = minutos % 60;
    const textoHoras = (`00${horas}`).slice(-2);
    const textoMinutos = (`00${min}`).slice(-2);

    return `${textoHoras}h.${textoMinutos}min`;
  };

  return (
    <>
    {
      !isLoading &&
      <MovieDescriptionContainer>
          <DescriptionStyle
            theme={MovieDescription?.backdrop_path && IMG + MovieDescription?.backdrop_path}
            key={MovieDescription?.id}>
            <img src={MovieDescription?.poster_path && IMG + MovieDescription?.poster_path} alt="" />
            <DetalhesContainer>
              <h1>{MovieDescription?.title}</h1>

              <MovieInfo>
                <span>{moment(MovieDescription?.release_date).format('YYYY')}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <IoTimerOutline size={18} /> {handleConverteHoras(MovieDescription?.runtime)}
                </span>
                {/* <span>{movie.tamanho}</span> */}
                <button onClick={() => setModalTrailer(true)}>TRAILER</button>
              </MovieInfo>

              <span>
                Categoria: {MovieDescription?.genres.map((genre: GenreType) => genre.name + ', ')}
              </span>

              <span>Genero: Filme</span>
              {/* <span>Idioma: {movie.idioma.map((idi: any) => { return <span key={idi}>{idi} </span> })}</span> */}
              <strong>Sinopse</strong>
              <p>{description}</p>
            </DetalhesContainer>
          </DescriptionStyle>

      {
        modalTrailer &&
        <ModalTrailer
          id={id!}
          visible={modalTrailer}
          closeModal={() => setModalTrailer(false)}
        />
      }

      <Downloads />

    </MovieDescriptionContainer>
    }
    </>
  )
}
