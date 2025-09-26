import { ThemeToggler } from "./ThemeToggler";
import { GenreDropdown } from "./GenreDropdown";
import Link from "next/link";
import { SearchSection } from "./SearchSeaction";
import { Button } from "@/components/ui/button";
import { SearchCheck, SearchIcon } from "lucide-react";

export const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="flex gap-5 justify-between mt-10 w-360 items-center">
        <div className="flex items-center gap-2 ml-10">
          <img src="img1.svg" />
          <Link href={`/`}>
            <span className="text-indigo-700">Movie Z</span>
          </Link>
        </div>
        <div className="flex gap-3 sm:full w-127 max-md:hidden">
          <div className="max-md:hidden">
            {" "}
            <GenreDropdown />
          </div>

          <div className="flex flex-col">
            <div className="max-md:hidden">
              <SearchSection />
            </div>
          </div>
        </div>
        <div className="max-md:block hidden ml-70">
          <Button variant="secondary" size="icon" className="size-8 rounded-1">
            <SearchIcon></SearchIcon>
          </Button>
        </div>
        <div className="mr-10 shadow-1 shadow-white">
          <ThemeToggler />
        </div>
      </div>
    </div>
  );
};
