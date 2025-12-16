"use client";
import { FaStar } from "react-icons/fa";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { MovieType } from "@/types";
import React from "react";
import { TrailMovie } from "./get-data";
import { Card, CardContent } from "../ui/card";
import { TrailerDialog } from "./TrailerDialog";

type MovieCarouselProps = {
  movies: MovieType[];
};

export function MovieCarousel({ movies }: MovieCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel setApi={setApi} className="w-360 max-md:w-120">
        <CarouselContent>
          {movies.slice(0, 5).map((movie, index) => (
            <MovieCarouselItem key={index} movie={movie} />
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-13" />
        <CarouselNext className="right-13" />
      </Carousel>
      <div className="flex gap-2 mt-10 mx-auto justify-center">
        {Array.from({ length: count }).map((_, index) => (
          <div
            onClick={() => {
              api?.scrollTo(index);
            }}
            key={index}
            className={`rounded-full size-4 ${
              index + 1 === current ? "bg-white" : "bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export const MovieCarouselItem = ({ movie }: { movie: MovieType }) => {
  const [trailerKey, setTrailerKey] = React.useState("");

  React.useEffect(() => {
    let mounted = true;
    const fetchTrailer = async () => {
      type TrailerType = {
        id: string;
        key: string;
        type: string;
      };
      type TrailerResponseType = {
        id: number;
        results: TrailerType[];
      };
      const trailerData: TrailerResponseType = await TrailMovie(
        movie.id.toString()
      );
      if (!mounted) return;
      const trailer = trailerData.results.find(
        (item) => item.type === "Trailer"
      );
      setTrailerKey(trailer?.key || "");
    };
    fetchTrailer();
    return () => {
      mounted = false;
    };
  }, [movie.id]);
  return (
    <div>
      <div>
        <CarouselItem className="flex justify-center w-360 h-160 mt-10 max-md:hidden">
          <div>
            <Card className="w-360 h-150 flex justify-center">
              <CardContent className="flex aspect-video  flex-col relative w-360 h-160">
                <div className="flex justify-center">
                  <img
                    className="flex justify-center items-center w-360 h-160"
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt={movie.title}
                  ></img>
                </div>
                <div className="absolute mt-40 ml-35">
                  <span>Now Playing:</span>
                  <span className="text-4xl font-semibold flex">
                    {movie.title}
                  </span>
                  <div className="flex items-center mt-3">
                    <FaStar className="text-[#FDE047] w-5 h-5 "></FaStar>
                    {movie.vote_average}/10
                  </div>
                  <div className="w-100 mt-4">{movie.overview}</div>

                  <TrailerDialog videoKey={trailerKey}>
                    <div className="flex items-center mt-10">
                      <button className="p-7 h-10 w-auto bg-white flex items-center rounded-md justify-center text-black gap-2">
                        <img
                          className="text-black w-6 h-6"
                          src="play.png"
                          alt="play"
                        />
                        Watch Trailer
                      </button>
                    </div>
                  </TrailerDialog>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <div className="max-md:block hidden mt-10">
          <div className="flex justify-center">
            <CarouselItem className="flex w-130 h-45 mt-10 ">
              <div>
                <Card className="w-160 h-45 flex justify-center">
                  <CardContent className="flex aspect-video flex-col relative w-130">
                    <div className="flex justify-center">
                      <img
                        className="flex justify-center items-center w-260 h-60"
                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                        alt={movie.title}
                      ></img>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-10 ml-10 md:hidden">
          <div className="flex items-center justify-between">
            <span>Now Playing:</span>
            <div className="flex items-center mt-3">
              <FaStar className="text-[#FDE047] w-5 h-5 "></FaStar>
              {movie.vote_average}/10
            </div>
          </div>
          <span className="text-4xl font-semibold flex">{movie.title}</span>

          <div className="w-100 mt-4">{movie.overview}</div>

          <TrailerDialog videoKey={trailerKey}>
            <div className="flex items-center mt-10">
              <button className="p-7 h-10 w-auto bg-white flex items-center rounded-md justify-center text-black gap-2">
                <img className="text-black w-6 h-6" src="play.png" alt="play" />
                Watch Trailer
              </button>
            </div>
          </TrailerDialog>
        </div>
      </div>
    </div>
  );
};
