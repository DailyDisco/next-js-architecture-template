import SidebarLayout from "~/components/common/sidebar/SidebarLayout";
import PrimaryLayout from "~/components/layouts/PrimaryLayout";
import { type NextPageWithLayout } from "./page";

const About: NextPageWithLayout = () => {
  return (
    <div className="mt-3 flex w-2/3">
      <SidebarLayout />
      <section className="ml-7">
        <h2 className="mb-3 text-2xl">Layout Example (About)</h2>
        <div className="">
          <p className="mb-3">
            This example adds a property <code>getLayout</code> to your page,
            allowing you to return a React component for the layout. This allows
            you to define the layout on a per-page basis. Since we&apos;re
            returning a function, we can have complex nested layouts if desired.
          </p>
          <p className="mb-3">
            When navigating between pages, we want to persist page state (input
            values, scroll position, etc.) for a Single-Page Application (SPA)
            experience.
          </p>
          <p className="mb-3">
            This layout pattern will allow for state persistence because the
            React component tree is persisted between page transitions. To
            preserve state, we need to prevent the React component tree from
            being discarded between page transitions.
          </p>
          <h3>Try It Out</h3>
          <p className="mb-3">
            To visualize this, try tying in the search input in the{" "}
            <code>Sidebar</code> and then changing routes. You&apos;ll notice
            the input state is persisted.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

About.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
