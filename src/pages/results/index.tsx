/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import PrimaryLayout from "../../components/layouts/PrimaryLayout";
import SearchResult from "../../components/utility/search-result/SearchResult";
import { mockSearchResultProps } from "../../components/utility/search-result/SearchResult.mock";
import { type NextPageWithLayout } from "../page";

const Results: NextPageWithLayout = () => {
  return (
    <section className="flex flex-col items-center gap-y-5">
      <div className={`flex flex-col space-y-8`}>
        {[...new Array(6)].map((_, idx) => {
          return (
            <SearchResult
              searchResults={[]}
              key={idx}
              {...mockSearchResultProps.base}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Results;

Results.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
