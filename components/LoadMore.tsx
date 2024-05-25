"use client";

import { useSearchParams, useRouter } from "next/navigation";

interface LoadMoreProps {
  limit: number;
}

const LoadMore: React.FC<LoadMoreProps> = ({ limit }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleLoadMore = () => {
    const params = new URLSearchParams(searchParams);
    const shows = params.get('shows');
    const currentShows = shows ? parseInt(shows, 10) : 8;
    const newShows = currentShows + 24;
    params.set('shows', newShows.toString());

    const newUrl = `/?${params.toString()}`;
    router.push(newUrl, { scroll: false });
  };

  const handleShowLess = () => {
    const params = new URLSearchParams(searchParams);
    const shows = params.get('shows');
    const currentShows = shows ? parseInt(shows, 10) : 8;
    const newShows = Math.max(8, currentShows - 24); // Ensure it doesn't go below 8
    params.set('shows', newShows.toString());

    const newUrl = `/?${params.toString()}`;
    router.push(newUrl, { scroll: false });
  };

  const shows = searchParams.get('shows');
  const currentShows = shows ? parseInt(shows, 10) : 8;

  return (
    <div className="flex justify-center py-6 space-x-4">
      {currentShows < limit && (
        <button
          onClick={handleLoadMore}
          className="bg-orange-500 text-white rounded-lg px-8 py-2.5 capitalize transition-colors duration-200 hover:bg-orange-600"
        >
          نمایش بیشتر
        </button>
      )}
      {currentShows > 8 && (
        <button
          onClick={handleShowLess}
          className="bg-orange-500 text-white rounded-lg px-8 py-2.5 capitalize transition-colors duration-200 hover:bg-orange-600"
        >
          نمایش کمتر
        </button>
      )}
    </div>
  );
};

export default LoadMore;
