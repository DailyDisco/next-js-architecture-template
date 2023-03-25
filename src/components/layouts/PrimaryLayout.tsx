import Head from "next/head";
import Footer from "../common/Footer";
import Header from "../common/Navbar";
export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<"div"> {}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, ...divProps }) => {
  return (
    <>
      <Head>
        <title>NextJs Fullstack App Template</title>
      </Head>
      <div {...divProps} className="flex min-h-screen flex-col">
        <Header />
        <main className="px-5">{children}</main>
        <div className="m-auto" />
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
