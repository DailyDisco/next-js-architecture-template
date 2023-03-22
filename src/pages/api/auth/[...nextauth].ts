/* eslint-disable @typescript-eslint/no-non-null-assertion */
import NextAuth from 'next-auth';
import { authOptions } from '~/server/auth';

export const AuthOptions = {
  providers: [
    //   GoogleProvider({
    //     clientId: process.env.GOOGLE_ID!,
    //     clientSecret: process.env.GOOGLE_SECRET!,
    //   }),
    //   GithubProvider({
    //     clientId: process.env.GITHUB_ID!,
    //     clientSecret: process.env.GITHUB_SECRET!,
    //   }),
    //   // add more providers here
  ],
};

export default NextAuth(authOptions);
