import { Row } from "antd";
import styled from "styled-components";
import { BiSearchAlt } from 'react-icons/bi';
import { useState } from "react";
import useGetSearch from "../hooks/useGetSearch";
import { CardList } from "../../../shared/components/Cards/CardList";
import { useForm } from "react-hook-form";
import { InputContainer, NotFound, SearchContainer } from "../styles/style";

export function SearchPage() {
  const [searchFilmes, setSearchFilmes] = useState('');
  const [searchSeries, setSearchSeries] = useState('');
  const { register, handleSubmit, reset } = useForm();

  const { data: searchFilmesData, isLoading: LoadingFilmes } = useGetSearch("movie", searchFilmes);
  const { data: searchSeriesData, isLoading: LoadingSeries } = useGetSearch("tv", searchSeries);

  console.log('filmes',searchFilmesData);
  console.log('series',searchSeriesData);

  function handleSearch(data: any) {
    const { name } = data;
    setSearchFilmes(name);
    setSearchSeries(name);
    reset();
  }

  return (
    <SearchContainer>

      <InputContainer>
        <form onSubmit={handleSubmit(handleSearch)}>
          <input
            type="text"
            placeholder="Pesquisar filme ou série..."
            {...register("name")}
          />
          <button type="submit"><BiSearchAlt size={25} /></button>
        </form>
      </InputContainer>

      { !searchFilmes && !searchSeries && <div style={{ width: '100%', height: '100vh' }}></div> }

      { searchFilmes && <CardList loading={LoadingFilmes} dataSource={searchFilmesData} type="filmes" /> }

      { searchSeries && <CardList loading={LoadingSeries} dataSource={searchSeriesData} type="series" /> }

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
