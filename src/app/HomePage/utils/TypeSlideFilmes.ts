export interface TypeSlideFilmes {
  id: number;
  title: string;
  anoLancamento: number;
  tempoFilme: number;
  imgURL: string;
  descricao: string;
  genero: string;
  categoria: string[];
  idioma: string[];
  tamanho: string;
  createdAt: string,
  updatedAt: string,
  trailer: string;

  poster_path: string;
  release_date: string;
  vote_average: number;
  name: string;
}
