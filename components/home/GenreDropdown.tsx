import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export const GenreDropdown = () => {
  const GENRES = ["ACTION", "ADVENTURE", "Animation", "Comedy"];
  return (
    <div>
      <div className="flex gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="border-1 rounded-[6px] w-24 h-9">Genres</button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Genres</DropdownMenuLabel>
            <span>See lists of movies by genre</span>
            <DropdownMenuSeparator />
            <div className="flex">
              {GENRES.map((genre) => (
                <DropdownMenuItem key={genre}>
                  <Link href="/genre">{genre}</Link>
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
