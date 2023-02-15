
import styled from "styled-components"
import { BannerSlide } from "../../../shared/components/Slides/BannerSlide";
import { SlideCards } from "../../../shared/components/Slides/SlideCards";
import useGetMovies from "../../../shared/hooks/useGetMovies";
import useGetSeries from "../../../shared/hooks/useGetSeries";
import { bannerMock } from "../__mocks__/bannerMock"

export function HomePage() {
  const { data: MoviesData, isLoading } = useGetMovies('now_playing');
  const { data: SeriesData, isLoading: LoadingSeries } = useGetSeries();

  return (
    <>
      <BannerSlide dataSource={bannerMock} />

      <div style={{ marginTop: '3rem' }}>
        <TitleSection>Últimos Lançamentos</TitleSection>
      </div>
      <SlideCards dataSource={MoviesData?.results} loading={isLoading} type="filmes" />

      <div style={{ marginTop: '3rem' }}>
        <TitleSection>Séries</TitleSection>
      </div>
      <SlideCards dataSource={SeriesData?.results} loading={LoadingSeries} type="series" />
    </>
  );
}

const TitleSection = styled.span`
  margin-left: 2.5rem;
  font-size: 1.3rem;
`;


