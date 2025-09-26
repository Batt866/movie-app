import { getMovieGenres, getSearchedMovies } from "@/components/home/get-data";
import { MovieCard } from "@/components/home/movie-card";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { GenerTypeResponsetype, movieResponseType } from "@/types";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type GenerPageProps = {
  searchParams: Promise<{ id: string; page: string }>;
};

const Search = async ({ searchParams }: GenerPageProps) => {
  const params = await searchParams;
  const id = params.id;
  const page = params.page || "1";
  const filteredMoviesResponse: movieResponseType = await getSearchedMovies(
    id,
    page
  );
  const currentUrl = `/Search?id=${id}&`;
  const GenreMoviesResponse: GenerTypeResponsetype = await getMovieGenres();
  return (
    <div className="mt-10 max-w-360 m-auto flex max-md:flex-col">
      <div>
        <span className="font-semibold text-3xl md:ml-10">Search results</span>
        <div className="mt-10 gap-1 flex md:ml-10">
          {" "}
          {filteredMoviesResponse.results.length} <h2> results for</h2>"{id}"
        </div>
        <div className="flex gap-4 flex-wrap items-center mt-5 border-r md:ml-10">
          {filteredMoviesResponse.results.slice(0, 9).map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              score={movie.vote_average}
              image={movie.poster_path}
            ></MovieCard>
          ))}
        </div>
        <Pagination className="flex justify-end">
          <PaginationContent>
            {page !== "1" && (
              <>
                <PaginationItem>
                  <PaginationPrevious
                    href={`${currentUrl}page=${Number(page) - 1}`}
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href={`${currentUrl}page=${Number(page) - 1}`}
                  >
                    {Number(page) - 1}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}

            <PaginationItem>
              <PaginationLink isActive href="#">
                {page}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={`${currentUrl}page=${Number(page) + 1}`}>
                {Number(page) + 1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href={`${currentUrl}page=${Number(page) + 1}`} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <div>
        <div>
          {" "}
          <div className="ml-10 mt-20">
            <div className="text-2xl font-semibold">Search by genre</div>
            <div className="text-base font-normal">
              See lists of movies by genre
            </div>
          </div>
          <div className="flex flex-wrap w-78 gap-5 justify-start mt-5 ml-10">
            {GenreMoviesResponse.genres.map((genre) => (
              <Link
                key={genre.id}
                href={`/genre?id=${genre.id}&name=${genre.name}&page=${1}`}
              >
                <>
                  <Button className="flex items-center gap-2 rounded-full border-1 border-[#E4E4E7] h-6">
                    <span className="text-[12px] font-semibold ">
                      {genre.name}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </>
              </Link>
            ))}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
export default Search;
