import moment from "moment";
import { useState } from "react";
import { IoTimerOutline } from "react-icons/io5";
import { Downloads } from "./components/Downloads";
import { ModalTrailer } from "./components/ModalTrailer";
import { DescriptionTypes, GenreType } from "../../types/DescriptionTypes";
import { DescriptionStyle, DetalhesContainer, MovieInfo } from "./styles/style";

import { AiOutlineStar } from 'react-icons/ai';
import { WarezPlayer } from "../Players/WarezPlayer";

interface DescriptionProps {
  dataSource: DescriptionTypes;
  id: number;
  loading?: boolean;
}

const IMG = import.meta.env.VITE_IMG;

export function Description({ dataSource, loading, id }: DescriptionProps) {
  const [assistir, setAssistir] = useState(false);
  const [modalTrailer, setModalTrailer] = useState(false);

  let description = dataSource?.overview;
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

  const times = dataSource?.episode_run_time ?? [];
  const runtime = times[0];

  return (
    <>
      {
        !loading &&
        <div>
          <DescriptionStyle
            theme={dataSource?.backdrop_path && IMG + dataSource?.backdrop_path}
            key={dataSource?.id}>
            <img src={dataSource?.poster_path && IMG + dataSource?.poster_path} alt="" />
            <DetalhesContainer>
              <h1>{dataSource?.title || dataSource?.name}</h1>

              <MovieInfo>
                <span>{moment(dataSource?.release_date).format('YYYY')}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <IoTimerOutline size={18} /> {handleConverteHoras(dataSource?.runtime || runtime || 0)}
                </span>
                <span><AiOutlineStar size={18} /> {dataSource?.vote_average.toFixed(1)}</span>
                <button onClick={() => setModalTrailer(true)}>TRAILER</button>
              </MovieInfo>

              <span>
                Categoria: {dataSource?.genres.map((genre: GenreType) => genre.name + ', ')}
              </span>

              <span>Genero: {dataSource?.number_of_seasons ? 'Serie' : 'Filme'}</span>
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

          {
            !dataSource?.number_of_seasons &&
            <WarezPlayer imdbId={dataSource?.imdb_id} value={assistir} setValue={setAssistir} />
          }

          {dataSource?.number_of_seasons && <Downloads />}

        </div>
      }
    </>
  );
}
