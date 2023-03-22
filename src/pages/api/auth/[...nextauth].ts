import NextAuth from 'next-auth';
import { authOptions } from '~/server/auth';

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import GoogleProvider from 'next-auth/providers/google';

export const AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    // add more providers here
  ],
};

export default NextAuth(authOptions);
