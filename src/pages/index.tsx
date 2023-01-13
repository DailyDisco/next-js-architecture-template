// import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
// import SidebarLayout from '../../components/layouts/sidebar/SidebarLayout';
// import { NextPageWithLayout } from './page';

// const Home: NextPageWithLayout = () => {
//   return (
//     <section className="">
//       <h1 className="text-xl">Welcome to Electric World</h1>
//       <p className="text-sm"> This is the home page</p>
//     </section>
//   );
// };

// export default Home;

// Home.getLayout = (page) => {
//   return (
//     <PrimaryLayout>
//       <SidebarLayout />
//       {page}
//     </PrimaryLayout>
//   );
// };

import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
