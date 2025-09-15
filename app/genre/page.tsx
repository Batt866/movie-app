import { getMoviesByGenreId } from "@/components/home/gener-data";
import { MovieCard } from "@/components/home/movie-card";
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

type GenerPageProps = {
  searchParams: Promise<{ id: string }>;
};

const Genre = async ({ searchParams }: GenerPageProps) => {
  const params = await searchParams;
  const id = params.id;
  const filteredMoviesResponse: movieResponseType = await getMoviesByGenreId(
    id
  );
  console.log("Moveiadnasid", filteredMoviesResponse);

  return (
    <div className="mt-10 ">
      <span className="font-semibold text-3xl">Search filter</span>
      <div className="flex">
        <div className="mt-10 mr-20">
          <h1 className="font-semibold text-2xl">Geners</h1>
          <h5 className="text-foreground">See lists of movies by genre</h5>
          <div></div>
        </div>
        <div className="flex flex-wrap w-300 gap-3 mt-10">
          {filteredMoviesResponse.results.map((movie) => (
            <div>
              <MovieCard
                title={movie.title}
                score={movie.vote_average}
                image={movie.poster_path}
              ></MovieCard>
            </div>
          ))}
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
                <PaginationLink href="#">2</PaginationLink>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};
export default Genre;
