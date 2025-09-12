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

export const GenreDropdown = () => {
  const GENRES = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Flim-Noir",
    "Game-Show",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "News",
    "Reality-TV",
    "Romance",
    "Sci-Fi",
    "Short",
    "Sport",
    "Talk-Show",
    "Thriller",
    "War",
    "Western",
  ];
  return (
    <div>
      <div className="flex gap-3 ">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="border-1 rounded-[6px] w-24 h-9">Genres</button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className=" ml-4">Genres</DropdownMenuLabel>
            <span className="ml-4">See lists of movies by genre</span>
            <DropdownMenuSeparator />

            <div className="flex w-120 flex-wrap gap-2 mt-3">
              {GENRES.map((genre) => (
                <DropdownMenuItem
                  className="border-1 rounded-full border-black h-6"
                  key={genre}
                >
                  <Link href="/genre">{genre}</Link>
                  <ChevronRight />
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
