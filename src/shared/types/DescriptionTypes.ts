export interface GenreType {
  name: string;
}

export interface DescriptionTypes {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  name: string;
  release_date: string;
  runtime: number;
  genres: GenreType[];
  overview: string;
  episode_run_time: number[];
  vote_average: number;
  number_of_seasons: number;
  imdb_id: string;
}
