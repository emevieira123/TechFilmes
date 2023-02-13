
import styled from "styled-components"
import { BannerSlide } from "../../../shared/components/Slides/BannerSlide";
import { SlideCards } from "../../../shared/components/Slides/SlideCards";
import useGetMovieDescription from "../../../shared/hooks/useGetMovieDescription";
import useGetMovies from "../../../shared/hooks/useGetMovies";
import useGetSeriesPopular from "../../../shared/hooks/useGetSeriesPopular";
import { bannerMock } from "../__mocks__/bannerMock"

export function HomePage() {
  const { data: MoviesData, isLoading } = useGetMovies('now_playing');
  const { data: PopularSeriesData, isLoading: LoadingSeries } = useGetSeriesPopular();

  const { data: MovieDescription } = useGetMovieDescription(505642);

  console.log(MovieDescription);

  return (
    <>
      <BannerSlide dataSource={bannerMock} />

      <div style={{ marginTop: '3rem' }}>
        <TitleSection>Últimos Lançamentos</TitleSection>
      </div>
      <SlideCards dataSource={MoviesData} loading={isLoading} type="filmes" />

      <div style={{ marginTop: '3rem' }}>
        <TitleSection>Séries</TitleSection>
      </div>
      <SlideCards dataSource={PopularSeriesData} loading={LoadingSeries} type="series" />
    </>
  );
}

const TitleSection = styled.span`
  margin-left: 2.5rem;
  font-size: 1.3rem;
`;


