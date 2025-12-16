import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { getMovieGenres } from "./get-data";
import { Badge } from "../ui/badge";
import { GenerType } from "@/types";

export async function GenreDropdown() {
  const genersResponse = await getMovieGenres();

  return (
    <div className="flex gap-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="border-1 rounded-[6px] w-24 h-9">Genres</button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className=" ml-4">Genres</DropdownMenuLabel>
          <span className="ml-4">See lists of movies by genre</span>
          <DropdownMenuSeparator />
          {(() => {
            const defaultGenres: GenerType[] = [
              { id: -1, name: "Action" },
              { id: -2, name: "Comedy" },
              { id: -3, name: "Drama" },
              { id: -4, name: "Horror" },
              { id: -5, name: "Romance" },
            ];

            const genres =
              Array.isArray(genersResponse?.genres) &&
              genersResponse.genres.length
                ? genersResponse.genres
                : defaultGenres;

            return genres.map((genre: GenerType) => (
              <DropdownMenuItem
                key={genre.id}
                asChild
                className="hover:!bg-transparent"
              >
                <Link href={`/genre?id=${genre.id}`}>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">{genre.name}</Badge>
                    <ChevronRight />
                  </div>
                </Link>
              </DropdownMenuItem>
            ));
          })()}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
