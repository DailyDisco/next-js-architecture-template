import { useRouter } from 'next/router';
import { useState } from 'react';

export interface ISearch {
  className?: string;
}

const Search: React.FC<ISearch> = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <form
      className="flex flex-col items-center gap-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        void router.push(`/results?search=${searchTerm}`);
      }}
    >
      <input
        type="text"
        className="h-12 w-5/6 rounded-full border-2 px-3 sm:w-128"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="space-x-3">
        <button type="submit" className="btn-primary">
          Google Search
        </button>
        <button
          onClick={() => alert('FEATURE COMING SOON!')}
          className="btn-primary"
        >
          I&apos;m Feeling Lucky
        </button>
      </div>
    </form>
  );
};

export default Search;
