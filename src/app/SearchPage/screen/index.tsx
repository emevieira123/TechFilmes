import { Row } from "antd";
import styled from "styled-components";
import { BiSearchAlt } from 'react-icons/bi';
import { useState } from "react";
import useGetSearch from "../hooks/useGetSearch";
import { CardList } from "../../../shared/components/Cards/CardList";
import { useForm } from "react-hook-form";

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

      {!searchFilmes && !searchSeries && <div style={{ width: '100%', height: '100vh' }}></div>}
      {
        searchFilmes && <CardList loading={LoadingFilmes} dataSource={searchFilmesData} type="filmes" />
      }
      {
        searchSeries && <CardList loading={LoadingSeries} dataSource={searchSeriesData} type="series" />
      }
    </SearchContainer>
  );
}

const SearchContainer = styled(Row)`
  padding: 1rem 3rem;
  height: 80vh;
`;

const InputContainer = styled(Row)`
  width: 100%;

  form {
    width: 100%;
    display: flex;
    align-items: center;
  }

  input {
    width: 96.5%;
    height: 3rem;
    border: 0;
    font-size: 1.25rem;
    text-align: center;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background: ${props => props.theme.gray800};
    color: ${props => props.theme.gray300};
    &:focus {
      outline: none;
    }
  }

  button {
    width: 3.5%;
    height: 3rem;
    border: 0;
    background: ${props => props.theme.gray800};
    color: ${props => props.theme.gray300};
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
  }
`;
