import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Arrow } from "./components/Arrow"
import { TypeSlideFilmes } from "../../../../app/HomePage/types/TypeSlideFilmes"
import { useNavigate } from "react-router-dom"
import { URLS } from "../../../../infra/URLS"
import { ArrowContainer, ContainerSlide } from "./styles/style"
import { CardSlide } from "../../Cards/CardSlide"

interface SlideCardsProps {
  dataSource: TypeSlideFilmes[];
  loading?: boolean;
  type?: string;
}

export function SlideCards({ dataSource, loading, type }: SlideCardsProps) {
  const navigate = useNavigate()
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 7,
      spacing: 20,
    },
  })

  function handleDetalhesFilme(id: number) {
    if(type === 'filmes') {
      navigate(URLS.FILME_ID.replace(':id', id.toString()))
    } else {
      navigate(URLS.SERIE_ID.replace(':id', id.toString()))
    }
  }

  return (
    <>
      {
        loading ? <h1>Carregando...</h1>
          : <ContainerSlide>
            <ArrowContainer>
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
              />
            </ArrowContainer>
            <div ref={sliderRef} className="keen-slider">
              {dataSource?.map((movie, i) => {
                return (
                  <CardSlide
                    key={i}
                    index={i}
                    title={movie.title || movie.name}
                    anoLacamento={movie.release_date}
                    votos={movie.vote_average}
                    urlImg={movie.poster_path}
                    onClick={() => handleDetalhesFilme(movie.id)}
                  />
                );
              })}
            </div>
            <ArrowContainer>
              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
              />
            </ArrowContainer>
          </ContainerSlide>
      }
    </>
  );
}
