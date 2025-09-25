import { getMovieGenres, getMoviesByGenreId } from "@/components/home/get-data";
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
import { movieResponseType } from "@/types";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type GenerPageProps = {
  searchParams: Promise<{ id: string; page: string }>;
};

const Genre = async ({ searchParams }: GenerPageProps) => {
  const params = await searchParams;
  const id = params.id;
  const page = params.page || "1";
  const filteredMoviesResponse: movieResponseType = await getMoviesByGenreId(
    id,
    page
  );

  const GenreMoviesResponse = await getMovieGenres();
  // /genre?id=12#
  const currentUrl = `/genre?id=${id}&`;

  return (
    <div className="mt-10 w-360 m-auto">
      <span className="font-semibold text-3xl">Search filter</span>
      <div className="flex">
        <div className="mt-10 mr-10">
          <h1 className="font-semibold text-2xl">Geners</h1>
          <h5 className="text-foreground">See lists of movies by genre</h5>

          <div className="flex">
            {" "}
            <div className="flex flex-wrap w-78 h-50 gap-5 justify-start mt-5">
              {GenreMoviesResponse.genres.map(
                (genre: { id: string; name: string }) => (
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
                )
              )}
            </div>{" "}
          </div>
        </div>
        <div className="flex flex-wrap w-300 gap-12 mt-10">
          {filteredMoviesResponse.results.slice(0, 12).map((movie) => (
            <MovieCard
              key={id}
              id={movie.id}
              title={movie.title}
              score={movie.vote_average}
              image={movie.poster_path}
            ></MovieCard>
          ))}
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
                <PaginationNext
                  href={`${currentUrl}page=${Number(page) + 1}`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Genre;
