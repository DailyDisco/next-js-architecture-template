## What is this?

This is a template to help create a Next.js project with NextAuth.js and Prisma from scratch quickly.

## What's included?

- Next.js (https://nextjs.org/docs/getting-started)
- NextAuth.js (https://next-auth.js.org/getting-started/introduction)
- Prisma (https://www.prisma.io/docs/concepts/overview/what-is-prisma)
- Typescript (https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- TailwindCSS (https://tailwindcss.com/docs)
- ESLint (https://eslint.org/docs/user-guide/getting-started)
- Prettier (https://prettier.io/docs/en/index.html)
- Husky (https://typicode.github.io/husky/#/)
- ESLint (https://eslint.org/docs/user-guide/getting-started)
- Zod (Schema Validation) (https://zod.dev/)
- tRPC (Typesafe API Routing) (https://trpc.io/docs)

## Why?

I wanted to create a template that was easy to use and had everything I needed to get started with a new project. I also wanted to use the latest technologies and best practices.

Typescript, TailwindCSS, and Next JS were added to the project from the start to help with development and to make the project more secure.

Thanks to Husky, and ESLint, Prettier, and Typescript, formatting and syntax is consistent. This repo is also ready to go for group development thanks to the pre-commit hooks and will show you your errors early on.

Prisma, ZOD, and tRPC were added after reviewing the <a href="https://create.t3.gg/en/introduction">"T3 Stack"</a>. Prisma is a great ORM, ZOD is a great schema validation library, and tRPC is a great Typesafe API routing library.

## Getting Started

Create a .env file with these variables:
DATABASE_URL="file:./dev.db"

#### NextAuth.js

NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET=""

#### NextAuth.js Providers

##### Discord Login (Example)

DISCORD_CLIENT_ID=""
DISCORD_CLIENT_SECRET=""

### Run NPM Install

```bash
npm install
# or
yarn
```

### Run the development server:

```bash
npm run dev
# or
yarn dev
```

### Open [http://localhost:3000]

Open http://localhost:3000 with your browser to see the result.
