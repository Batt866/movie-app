import { GenerType, MovieType } from "@/types";
import { getactorsname, getMoviesById } from "@/components/home/gener-data";
import { MovieCard } from "@/components/home/movie-card";
import { FaStar } from "react-icons/fa";
type GenerPageProps = {
  searchParams: Promise<{ id: string }>;
};

const Moviedetails = async ({ searchParams }: GenerPageProps) => {
  const Movieidpramas = await searchParams;
  const id = Movieidpramas.id;

  const filteredMoviesResponse: MovieType = await getMoviesById(id);

  const MoviesResponse: MovieType = await getactorsname(id);
  console.log("jujigchidiin id", MoviesResponse);

  return (
    <div>
      <div className="mt-20 flex justify-between max-w-270">
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
          className="w-72 h-107"
        />
        <img
          src={`https://image.tmdb.org/t/p/original/${filteredMoviesResponse.backdrop_path}`}
          className="w-190 h-107"
        ></img>
      </div>

      <div className="flex gap-5 mt-8">
        {filteredMoviesResponse.genres.map((genre) => {
          return (
            <div className="border-1 rounded-full w-20 flex items-center justify-center">
              {genre.name}
            </div>
          );
        })}
      </div>
      <div>{MoviesResponse.name}</div>
      <div className="mt-8">{filteredMoviesResponse.overview}</div>
      <MovieCard
        title={filteredMoviesResponse.title}
        score={filteredMoviesResponse.vote_average}
        image={filteredMoviesResponse.poster_path}
        id={filteredMoviesResponse.id}
      ></MovieCard>
    </div>
  );
};
export default Moviedetails;
