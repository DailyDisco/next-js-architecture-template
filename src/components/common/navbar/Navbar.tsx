import { signIn } from 'next-auth/react';
import Link from 'next/link';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {
  className?: string;
  session: unknown;
}

const Navbar: React.FC<IHeader> = ({ session, ...headerProps }) => {
  console.log(session, 'session in session');
  return (
    <header {...headerProps} className={`flex w-full flex-row justify-between`}>
      <div className="m-5 space-x-5">
        <Link className="hover:underline" href="/about">
          About
        </Link>
        <Link className="hover:underline" href="/">
          Store
        </Link>
      </div>
      <div className="m-5 space-x-5">
        <Link className="hidden hover:underline sm:inline" href="/">
          Gmail
        </Link>
        <Link className="hidden hover:underline sm:inline" href="/">
          Images
        </Link>
        <button
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={() => signIn('discord')}
          className="border-1 rounded bg-blue-500 p-2 px-4 text-white sm:px-6"
        >
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Navbar;
