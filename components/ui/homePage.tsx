import { MovieCard } from "@/components/home/movie-card";
import { MovieCarousel } from "@/components/home/scroll";
import { movieResponseType } from "@/types";
import { ChevronRight } from "lucide-react";

export default async function HomePage() {
  const getUpcomingMovies = async () => {
    console.log("ENV", process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY);
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
        },
      }
    );
    const data = await res.json();
    return data;
  };
  const getNowplayingMovies = async () => {
    console.log("ENV", process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY);
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_TMDB_ACCESS_KEY}`,
        },
      }
    );
    const data = await res.json();
    return data;
  };

  const upcomingMovies: movieResponseType = await getUpcomingMovies();
  const NowplayingMovies: movieResponseType = await getNowplayingMovies();

  console.log(upcomingMovies);

  return (
    <div>
      <div className="flex justify-center">
        <MovieCarousel movies={NowplayingMovies.results}></MovieCarousel>
      </div>
      <>
        {" "}
        <div className="flex justify-center">
          <div className="flex items-center justify-between w-330">
            <p className="font-semibold text-2xl mt-20 ml-15">Upcoming</p>
            <button className="flex  mt-20">
              See more <ChevronRight />
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-4 flex-wrap  w-360 items-center justify-center mt-5">
            {upcomingMovies.results.slice(0, 10).map((movie) => (
              <MovieCard
                id={movie.id}
                key={movie.id}
                title={movie.title}
                score={movie.vote_average}
                image={movie.poster_path}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center justify-between w-330">
            <p className="font-semibold text-2xl mt-5 ml-15">Upcoming</p>
            <button className="flex  mt-20">
              See more <ChevronRight />
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-4 flex-wrap  w-360 items-center justify-center mt-5">
            {upcomingMovies.results.slice(10, 20).map((movie) => (
              <MovieCard
                id={movie.id}
                key={movie.id}
                title={movie.title}
                score={movie.vote_average}
                image={movie.poster_path}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center justify-between w-330">
            <p className="font-semibold text-2xl mt-5 ml-15">Upcoming</p>
            <button className="flex  mt-20">
              See more <ChevronRight />
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-4 flex-wrap  w-360 items-center justify-center mt-5">
            {upcomingMovies.results.slice(20, 30).map((movie) => (
              <MovieCard
                id={movie.id}
                key={movie.id}
                title={movie.title}
                score={movie.vote_average}
                image={movie.poster_path}
              />
            ))}
          </div>
        </div>
      </>
    </div>
  );
}
