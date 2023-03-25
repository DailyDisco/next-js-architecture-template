import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Search from "../components/utility/search/Search";
import { api } from "../utils/api";
import { type NextPageWithLayout } from "./page";

const Home: NextPageWithLayout = () => {
  const user = useUser();
  console.log(user.user);
  const { locale } = useRouter();
  const { data } = api.example.getAll.useQuery();
  console.log(data, "data from tRPC call");
  return (
    <section className="sm:mt-36 mt-12 flex flex-col items-center gap-y-5">
      <Image
        src="/Google.png"
        alt="Google Logo"
        width={272}
        height={92}
        priority
      />
      <Search />
      <p>
        Google offered in:{" "}
        <Link
          className="text-blue-600 underline"
          href="/"
          locale={locale === "en" ? "fr" : "en"}
        >
          Français
        </Link>
      </p>
    </section>
  );
};

export default Home;

// Home.getLayout = (page) => {
//   return <PrimaryLayout>{page}</PrimaryLayout>;
// };
