import { Input } from "@/components/ui/input";
import { ThemeToggler } from "./ThemeToggler";
import { GenreDropdown } from "./GenreDropdown";
import Link from "next/link";

export const Header = () => {
  return (
    <div className=" flex gap-5 justify-between mt-10 w-360">
      <div className="flex items-center gap-2 ">
        <img src="img1.svg" />
        <Link href={`/`}>
          <span className="text-indigo-700">Movie Z</span>
        </Link>
      </div>
      <div className="flex gap-3">
        <GenreDropdown />
        <Input className="w-95" placeholder="search" />
      </div>
      <ThemeToggler />
    </div>
  );
};
