import { useState } from "react";
import useGetSearch from "../hooks/useGetSearch";
import { CardList } from "../../../shared/components/Cards/CardList";
import { useForm } from "react-hook-form";
import { NotFound, SearchContainer } from "../styles/style";
import { InputSearch } from "../components/InputSearch";
import styled from "styled-components";
import { Row } from "antd";

export function SearchPage() {
  const [searchFilmes, setSearchFilmes] = useState('');
  const [searchSeries, setSearchSeries] = useState('');
  const { register, handleSubmit, reset } = useForm();

  const { data: searchFilmesData, isLoading: LoadingFilmes } = useGetSearch("movie", searchFilmes);
  const { data: searchSeriesData, isLoading: LoadingSeries } = useGetSearch("tv", searchSeries);

  function handleSearch(data: any) {
    const { name } = data;
    setSearchFilmes(name);
    setSearchSeries(name);
    reset();
  }

  return (
    <SearchContainer>

      <InputSearch onSubmit={handleSubmit(handleSearch)} register={register} />

      { !searchFilmes && !searchSeries && <div style={{ width: '100%', height: '100vh' }}></div> }

      { searchFilmes && searchFilmesData?.length > 0 &&
        <CardSearch>
          <h1>Filmes</h1>
          <CardList loading={LoadingFilmes} dataSource={searchFilmesData} type="filmes" />
        </CardSearch>
      }

      { searchSeries && searchSeriesData?.length > 0 &&
        <CardSearch>
          <h1>Séries</h1>
          <CardList loading={LoadingSeries} dataSource={searchSeriesData} type="series" />
        </CardSearch>
      }

      {
        searchFilmesData?.length === 0 &&
        searchFilmes &&
        searchSeriesData?.length === 0 &&
        searchSeries &&
        <NotFound>
          <span>Nenhum resultado encontrado, pesquise novamente.</span>
        </NotFound>
      }

    </SearchContainer>
  );
}

const CardSearch = styled(Row)`
  flex-direction: column;
  margin: 1rem 0;
  padding-bottom: 1rem;
  border-radius: 1rem;
  border: 1px solid rgb(160,160,160, 0.1);

  h1 {
    padding: 1rem 0;
    text-align: center;
  }
`;
