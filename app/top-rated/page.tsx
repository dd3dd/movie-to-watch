import { Button } from "@/components/ui/button";
import MoviesList from "@/app/ui/movies/movies-list";
import SortDropdown from "../ui/sort-dropdown";
import { SortKey } from "@/lib/definitions";
import {
  MagnifyingGlassIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";

export default function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    sort?: SortKey;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const sort_by = searchParams?.sort || "rating_desc";

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Top Rated Movies</h1>
      </div>
      <div className="z-10 py-2 sticky top-0 flex justify-between gap-2 mb-4 bg-white">
        <div className="flex space-x-2">
          <Button>
            <MagnifyingGlassIcon className="w-5 mr-1" />
            Search
          </Button>
          <Button>
            <ListBulletIcon className="w-5 mr-1" />
            Watch List
          </Button>
        </div>
        <SortDropdown />
      </div>
      <MoviesList currentPage={currentPage} sort_by={sort_by} />
    </div>
  );
}
