import { Directorname, movieResponseType, MovieType } from "@/types";
import {
  getactorsname,
  getMoviesById,
  moreLikeThis,
  TrailMovie,
} from "@/components/home/get-data";
import { FaStar } from "react-icons/fa";
import { ChevronRight, Key } from "lucide-react";

import { MovieCard } from "@/components/home/movie-card";
import { TrailerDialog } from "@/components/home/TrailerDialog";
import Link from "next/link";
type GenerPageProps = {
  searchParams: Promise<{ id: string }>;
};

const Moviedetails = async ({ searchParams }: GenerPageProps) => {
  const Movieidpramas = await searchParams;

  const id = Movieidpramas.id;
  const videos: movieResponseType = await TrailMovie(id);

  const filteredMoviesResponse: MovieType = await getMoviesById(id);

  const MoviesResponse: Directorname = await getactorsname(id);

  const MoreLike: movieResponseType = await moreLikeThis(id);

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-20 flex justify-between w-310">
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
      </div>

      <div className="flex gap-10 mt-5 justify-center">
        <img
          src={`https://image.tmdb.org/t/p/w500/${filteredMoviesResponse.poster_path}`}
          className="w-80 h-110 max-md:hidden"
        />
        <div className="relative">
          <img
            src={`https://image.tmdb.org/t/p/original/${filteredMoviesResponse.backdrop_path}`}
            className="w-220 h-110"
          ></img>
          <div className="absolute inset-0 flex justify-start">
            <TrailerDialog
              videoKey={videos.results.length > 0 ? videos.results[0].key : ""}
            >
              <div className="flex items-center gap-4 mt-90 ml-5">
                <button className="w-10 h-10 bg-white flex items-center rounded-full justify-center">
                  <img className="text-black w-5 h-5" src="play.png" />{" "}
                </button>
                Play Trailer
              </div>
            </TrailerDialog>
          </div>
        </div>
      </div>
      <div className="flex w-360 justify-center">
        <div className="flex gap-3 mt-3 ">
          <img
            src={`https://image.tmdb.org/t/p/w500/${filteredMoviesResponse.poster_path}`}
            className="w-80 h-110 sm:hidden"
          />
          <div className="">
            <div className="flex gap-5 m-auto mt-10">
              {filteredMoviesResponse.genres.map((genre) => {
                return (
                  <div className="border-1 rounded-full w-20 flex justify-center">
                    {genre.id}
                    {genre.name}
                  </div>
                );
              })}
            </div>
            <div className="mt-8 ">{filteredMoviesResponse.overview}</div>
          </div>
        </div>
      </div>
      <div className="max-md:block"></div>
      <div className="flex sm:justify-start justify-start ml-2">
        <div className="flex justify-center w-650">
          <div className="mt-5"></div>
          <div className="flex justify-start flex-col max-md:ml-5">
            <div className="flex gap-10">
              <div className="font-bold text-base">Director </div>
              <div>
                {MoviesResponse.cast.length > 0
                  ? MoviesResponse.cast[0].name
                  : "Unknown"}
              </div>
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
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-between w-310 mt-8">
          <span className="font-semibold text-2xl">More like this</span>
          <button className="flex">
            {" "}
            see more <ChevronRight />
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex gap-6 mt-9 flex-wrap sm:justify-center justify-center ml-2">
          {MoreLike.results.slice(0, 5).map((results) => (
            <MovieCard
              key={results.id}
              title={results.title}
              score={results.vote_average}
              image={results.poster_path}
              id={results.id}
            ></MovieCard>
          ))}
        </div>
      </div>
    </>
  );
};
export default Moviedetails;
