import Head from 'next/head';
import Footer from '../common/footer/Footer';
import Header from '../common/navbar/Navbar';
export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
  session: unknown;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  session,
  children,
  justify = 'items-center',
  ...divProps
}) => {
  return (
    <>
      <Head>
        <title>NextJs Fullstack App Template</title>
      </Head>
      <div {...divProps} className={`flex min-h-screen flex-col ${justify}`}>
        <Header session={session} />
        <main className="px-5">{children}</main>
        <div className="m-auto" />
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
