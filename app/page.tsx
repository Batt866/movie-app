import { MovieCard } from "@/components/home/movie-card";
import { Scroll } from "@/components/home/scroll";
import { ChevronRight } from "lucide-react";

type MovieType = {
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
};

type movieResponseType = {
  page: number;
  totalPages: number;
  results: MovieType[];
};

export default async function Home() {
  const getUpcomingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
        },
      }
    );
    const data = await res.json();
    return data;
  };

  const upcomingMovies: movieResponseType = await getUpcomingMovies();

  console.log(upcomingMovies);

  return (
    <div>
      <div>
        <Scroll></Scroll>
      </div>
      <div>
        {" "}
        <div className="flex items-center justify-between max-w-330">
          <p className="font-semibold text-2xl mt-20 ml-28">Upcoming</p>
          <button className="flex  mt-20">
            See more <ChevronRight />
          </button>
        </div>
        <div className="flex gap-4 flex-wrap  w-360 items-center justify-center mt-5">
          {upcomingMovies.results.slice(0, 10).map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              score={movie.vote_average}
              image={movie.poster_path}
            />
          ))}
        </div>
        <div className="flex items-center justify-between max-w-330">
          <p className="font-semibold text-2xl mt-5 ml-28">Upcoming</p>
          <button className="flex  mt-20">
            See more <ChevronRight />
          </button>
        </div>
        <div className="flex gap-4 flex-wrap  w-360 items-center justify-center mt-5">
          {upcomingMovies.results.slice(0, 10).map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              score={movie.vote_average}
              image={movie.poster_path}
            />
          ))}
        </div>
        <div className="flex items-center justify-between max-w-330">
          <p className="font-semibold text-2xl mt-5 ml-28">Upcoming</p>
          <button className="flex  mt-20">
            See more <ChevronRight />
          </button>
        </div>
        <div className="flex gap-4 flex-wrap  w-360 items-center justify-center mt-5">
          {upcomingMovies.results.slice(0, 10).map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              score={movie.vote_average}
              image={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
