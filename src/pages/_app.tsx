/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import PrimaryLayout from "~/components/layouts/PrimaryLayout";
import { api } from "~/utils/api";
import "../styles/globals.css";
import { type NextPageWithLayout } from "./page";

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  // const getLayout = Component.getLayout || ((page: ReactElement) => page);

  // for multiple layouts
  // return getLayout(
  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

  //     <PrimaryLayout>
  //       <Component {...pageProps} />
  //     </PrimaryLayout>

  // );
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <ClerkProvider {...pageProps}>
      <ThemeProvider>
        <PrimaryLayout>
          <Component {...pageProps} />
        </PrimaryLayout>
      </ThemeProvider>
    </ClerkProvider>
  );
}

export default api.withTRPC(MyApp);
