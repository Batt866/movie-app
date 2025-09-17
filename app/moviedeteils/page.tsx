import { Directorname, movieResponseType, MovieType } from "@/types";
import {
  getactorsname,
  getMoviesById,
  moreLikeThis,
} from "@/components/home/gener-data";
import { FaStar } from "react-icons/fa";
import { ChevronRight } from "lucide-react";
import { log } from "console";
import { MovieCard } from "@/components/home/movie-card";
type GenerPageProps = {
  searchParams: Promise<{ id: string }>;
};

const Moviedetails = async ({ searchParams }: GenerPageProps) => {
  const Movieidpramas = await searchParams;
  const id = Movieidpramas.id;

  const filteredMoviesResponse: MovieType = await getMoviesById(id);

  const MoviesResponse: Directorname = await getactorsname(id);

  const MoreLike: movieResponseType = await moreLikeThis(id);
  console.log(MoreLike);
  return (
    <div>
      <div className="mt-20 flex justify-between max-w-310">
        <div>
          <div className="font-bold text-3xl">
            {filteredMoviesResponse.title}
          </div>
          <div>{filteredMoviesResponse.release_date}</div>
        </div>
        <div>
          <span>Rating</span>
          <div className="flex items-center">
            {" "}
            <FaStar className="text-[#FDE047]" />{" "}
            {filteredMoviesResponse.vote_average}/10
          </div>
        </div>
      </div>

      <div className="flex gap-10 mt-5">
        <img
          src={`https://image.tmdb.org/t/p/w500/${filteredMoviesResponse.poster_path}`}
          className="w-80 h-110"
        />
        <img
          src={`https://image.tmdb.org/t/p/original/${filteredMoviesResponse.backdrop_path}`}
          className="w-220 h-110"
        ></img>
      </div>

      <div className="flex gap-5 mt-8">
        {filteredMoviesResponse.genres.map((genre) => {
          return (
            <div className="border-1 rounded-full w-20 flex justify-center">
              {genre.name}
            </div>
          );
        })}
      </div>
      <div className="mt-8 max-w-310">{filteredMoviesResponse.overview}</div>
      <div className="mt-5">
        <div className="flex gap-10">
          <div className="font-bold text-base">Director </div>
          <div>{MoviesResponse.cast[0].name}</div>
        </div>
        <div className="flex gap-10 mt-3">
          <div className="font-bold text-base">Writer </div>
          <div className="flex gap-3">
            {MoviesResponse.crew.slice(0, 3).map((crew) => (
              <div>{crew.name}</div>
            ))}
          </div>
        </div>
        <div className="flex gap-10 mt-3">
          <div className="font-bold text-base">Actor </div>
          <div className="flex justify-center gap-3">
            {MoviesResponse.crew.slice(3, 6).map((crew) => (
              <div>{crew.name}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between max-w-310 mt-8">
        <span className="font-semibold text-2xl">More like this</span>
        <button className="flex">
          {" "}
          see more <ChevronRight />
        </button>
      </div>
      <div className="flex max-w-310 gap-6 mt-9">
        {MoreLike.results.slice(0, 5).map((results) => (
          <MovieCard
            title={results.title}
            score={results.vote_average}
            image={results.poster_path}
            id={results.id}
          ></MovieCard>
        ))}
      </div>
    </div>
  );
};
export default Moviedetails;
