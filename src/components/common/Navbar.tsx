import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import ThemeChanger from "./ThemeChanger";

export interface IHeader extends React.ComponentPropsWithoutRef<"header"> {
  className?: string;
}

const Navbar: React.FC<IHeader> = ({ ...headerProps }) => {
  const user = useUser();
  return (
    <header {...headerProps} className="flex w-full flex-row justify-between">
      <div className="m-7 my-auto flex space-x-5 text-lg">
        <Link className="hover:underline" href="/about">
          About
        </Link>
        <Link className="hover:underline" href="/">
          Store
        </Link>
      </div>
      <div className="m-5 space-x-5">
        <Link className="sm:inline hidden hover:underline" href="/">
          Gmail
        </Link>
        <Link className="sm:inline hidden hover:underline" href="/">
          Images
        </Link>
        <div></div>
        <div className="flex space-x-5">
          <div className="my-auto mt-2 flex items-center">
            <ThemeChanger />
          </div>
          {!user.isSignedIn ? (
            <div className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
              <SignInButton />
            </div>
          ) : (
            <div className="rounded bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-700">
              <SignOutButton />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
