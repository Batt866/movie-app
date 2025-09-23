export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  genres: GenerType[];
  name: string;
  key: string;
};

export type movieResponseType = {
  page: number;
  totalPages: number;
  results: MovieType[];
};
export type GenerType = {
  id: number;
  name: string;
};
export type Directorname = {
  cast: Crewtype[];
  crew: Crewtype[];
};

export type Crewtype = {
  job: string;
  name: string;
};
