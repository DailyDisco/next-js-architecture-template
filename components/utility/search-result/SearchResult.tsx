import { GetServerSideProps } from 'next';
import PrimaryLayout from '../../../components/layouts/primary/PrimaryLayout';
import SearchResult from '../../../components/utility/search-result/SearchResult';
import { IApiSearchResponseData } from '../../../src/lib/search';
import { ISearchData } from '../../../src/lib/search/types';
import { NextPageWithLayout } from '../../../src/pages/page';

export interface IResults {
  searchResults: ISearchData[];
}

export type ISearchResult = ISearchData & React.ComponentPropsWithoutRef<'div'>;

export const getServerSideProps: GetServerSideProps<IResults> = async ({
  query,
}) => {
  let searchResults: IApiSearchResponseData = [];
  // 1
  const searchTerm = query.search;

  if (searchTerm && searchTerm.length > 0) {
    // 2
    const response = await fetch(`http://localhost:3000/api/search`, {
      body: JSON.stringify({ searchTerm }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    searchResults = await response.json();
  }

  return {
    // 3
    props: {
      // Will be passed to the page component as props
      searchResults,
    },
  };
};

const Results: NextPageWithLayout<IResults> = ({ searchResults }) => {
  const hasResults = searchResults.length > 0;

  return (
    <>
      <section className="flex flex-col items-center gap-y-5">
        {hasResults ? (
          <div className={`flex flex-col space-y-8`}>
            {searchResults.map((result, idx) => {
              // 4
              return <SearchResult searchResults={[]} key={idx} {...result} />;
            })}
          </div>
        ) : (
          <p>No results found.</p>
        )}
      </section>
    </>
  );
};

export default Results;

Results.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};
