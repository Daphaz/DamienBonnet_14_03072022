# Hrnet - API

this is the first hrnet api for manage employees

## Installation
Install the project with lerna see the README.md in the root folder

For this project you need [postgresql]('https://www.postgresql.org/download/') installed in local.

After that you need to create a `.env` file with :
```sh
PORT=8000
DATABASE_URL="postgresql://user:password@localhost"
```

## How to Use
make you are in this folder

```sh
# start in dev mode
npm run dev
# start in production
npm run prod
# build the app
npm run build
# run the test
npm run test
# run and watch the test
npm run test:watch
# test coverage
npm run test:coverage
# eslint strict
npm run lint:strict
# eslint fix and prettier format
npm run lint:fix
# typescript check
npm run typecheck
# prettier format
npm run format
# prettier format check
npm run format:check
# generate typescript types from graphql schema
npm run generate
# launch prisma migration
npm run prisma:migration
# launch prisma studio
npm run prisma:studio
```
