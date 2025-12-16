import { MovieCard } from "@/components/home/movie-card";
import { MovieCarousel } from "@/components/home/scroll";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { getNowplayingMovies, UpcomingMovies } from "../home/get-data";
import { MovieType } from "@/types";

export default async function HomePage() {
  const NowplayingMovies = await getNowplayingMovies();
  const upcomingMovies = await UpcomingMovies();

  const nowPlayingResults = Array.isArray(NowplayingMovies?.results)
    ? NowplayingMovies.results
    : [];
  const upcomingResults = Array.isArray(upcomingMovies?.results)
    ? upcomingMovies.results
    : [];

  return (
    <div>
      <div className="flex justify-center">
        <MovieCarousel movies={nowPlayingResults}></MovieCarousel>
      </div>
      <>
        <div className="flex justify-center">
          <div className="max-sm:w-127 flex items-center justify-between w-330">
            <p className="font-semibold text-2xl mt-20 ml-15">Upcoming</p>
            <Link href={`/moreLike?id=upcoming`}>
              <button className="flex  mt-20">
                See more
                <ChevronRight />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-4 flex-wrap  w-360 items-center justify-center mt-5">
            {upcomingResults.slice(0, 10).map((movie: MovieType) => (
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
          <div className="max-sm:w-127 flex items-center justify-between w-330">
            <p className="font-semibold text-2xl mt-20 ml-15">Upcoming</p>
            <Link href={`/moreLike?id=upcoming`}>
              <button className="flex  mt-20">
                See more
                <ChevronRight />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-4 flex-wrap  w-360 items-center justify-center mt-5">
            {upcomingResults.slice(10, 20).map((movie: MovieType) => (
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
