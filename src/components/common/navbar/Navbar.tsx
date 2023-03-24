import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import ThemeChanger from '../ThemeChanger';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {
  className?: string;
  session: unknown;
}

const Navbar: React.FC<IHeader> = ({ ...headerProps }) => {
  const { data: session } = useSession();
  // console.log(useSession(), 'useSession()');
  // console.log(session, 'session in session');
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
          {!session ? (
            <button
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={() => signIn('discord')}
              className="border-1 sm:px-6 my-auto rounded bg-blue-500 p-2 px-4 text-white"
            >
              Sign In
            </button>
          ) : (
            <button
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={() => signOut()}
              className="border-1 sm:px-6 my-auto rounded bg-blue-500 p-2 px-4 text-white"
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
