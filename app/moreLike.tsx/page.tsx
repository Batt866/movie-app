import { MovieCard } from "@/components/home/movie-card";
import { movieResponseType } from "@/types";
import { getUpcomingMovies } from "@/components/home/get-data";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
type GenerPageProps = {
  searchParams: Promise<{ id: string; page: string }>;
};
const moreLikeThis = async ({ searchParams }: GenerPageProps) => {
  const params = await searchParams;
  const id = params.id;
  const page = params.page || "1";
  const MoreLike: movieResponseType = await getUpcomingMovies(id, page);

  const currentUrl = `/moreLike?id=${id}&`;
  return (
    <div>
      <span className="flex w-300 m-auto mt-10 font-semibold text-4xl">
        More Like This
      </span>
      <div className="flex flex-wrap w-360 m-auto gap-5 mt-5 justify-center">
        {MoreLike.results.slice(0, 10).map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            score={movie.vote_average}
            image={movie.poster_path}
            id={movie.id}
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
              <PaginationNext href={`${currentUrl}page=${Number(page) + 1}`} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
export default moreLikeThis;
