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
import { getMovieGenres } from "./gener-data";
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
          <DropdownMenuItem className="hover:!bg-transparent flex-wrap max-w-100 flex gap-3">
            {genersResponse.genres.map((genre: GenerType) => (
              <Link key={genre.id} href={`/genre?id=${genre.id}`}>
                <Badge variant="outline">
                  {genre.name}
                  <ChevronRight />
                </Badge>
              </Link>
            ))}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
