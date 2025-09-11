import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Genres = () => {
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
      <div className="flex gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Genres</DropdownMenuLabel>
            <span>See lists of movies by genre</span>
            <DropdownMenuSeparator />
            <div className="flex">
              {GENRES.map((genre) => (
                <DropdownMenuItem>{genre}</DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
export default Genres;
