/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import PrimaryLayout from '~/components/layouts/PrimaryLayout';
import '../styles/globals.css';
import { type NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  // const getLayout = Component.getLayout || ((page: ReactElement) => page);

  // for multiple layouts
  // return getLayout(
  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  //   <SessionProvider session={session}>
  //     <PrimaryLayout>
  //       <Component {...pageProps} />
  //     </PrimaryLayout>
  //   </SessionProvider>
  // );
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <SessionProvider session={session}>
      <PrimaryLayout session={session}>
        <Component {...pageProps} />
      </PrimaryLayout>
    </SessionProvider>
  );
}

export default MyApp;
