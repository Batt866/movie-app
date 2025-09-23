import { ThemeToggler } from "./ThemeToggler";
import { GenreDropdown } from "./GenreDropdown";
import Link from "next/link";
import { SearchSection } from "./SearchSeaction";

export const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="flex gap-5 justify-between mt-10 w-360 items-center">
        <div className="flex items-center gap-2 ">
          <img src="img1.svg" />
          <Link href={`/`}>
            <span className="text-indigo-700">Movie Z</span>
          </Link>
        </div>
        <div className="flex gap-3">
          <GenreDropdown />
          <div className="flex flex-col">
            <SearchSection />
          </div>
        </div>
        <ThemeToggler />
      </div>
    </div>
  );
};
