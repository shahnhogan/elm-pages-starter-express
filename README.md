# Elm Pages Starter Template with Express Adapter

This project demonstrates how to use [elm-pages 3.0](https://github.com/dillonkearns/elm-pages) with [Express.js](https://expressjs.com/).

You can see it in action at <https://elm-pages-v3-express.fly.dev/>.

Source code is available at <https://github.com/shahnhogan/elm-pages-starter-express>.

See the discussion on elm-pages adapters at <https://github.com/dillonkearns/elm-pages/discussions/378>.

## Key Features

- `adapters/express/adapter.mjs` runs at build time and integrates the elm-pages renderer and Express middleware into `dist-server/`.
- After running `npm run build`, the adapter will generate:
  - `dist-server/server.mjs`: A Node.js Express server configured for elm-pages. Run directly with `node dist-server/server.mjs` or via `npm start`.
  - `dist-server/middleware.mjs`: Exports a default function for serving the elm-pages app via [Express middleware](https://expressjs.com/en/guide/using-middleware.html). Place this middleware _after_ any routes you don't want handled by elm-pages.

## Setup Instructions

1. Clone the repo and run `npm install`.
2. Ensure Lamdera is installed (see below).
3. Use `npm run dev` to start the development server with hot reloading.
4. Use `npm run build` to build the app for production.
5. Use `npm start` to start the production server.

### Deployment

This example is deployed to [Fly.io](https://fly.io/), but it can run on any platform that supports Node.js.

[Deploy your own with these instructions](https://fly.io/docs/languages-and-frameworks/node/).

Note: The default `Dockerfile` generated by flyctl may need adjustments for elm-tooling and Lamdera. You can use the Dockerfile in this repo as a reference.

### Installing Lamdera

`elm-pages` 3.0 uses the Lamdera compiler, a superset of the Elm compiler with added functionality to automatically serialize Elm types to Bytes.

### Debugging Lamdera Errors

Lamdera may occasionally give compiler errors due to corrupted dependency cache. If you see the message:


```
-- PROBLEM BUILDING DEPENDENCIES ---------------

...


Note: Sometimes `lamdera reset` can fix this problem by rebuilding caches, so
give that a try first.
```


Use `lamdera reset` to clear the caches. More information is available in the Lamdera docs: [Lamdera Documentation](https://dashboard.lamdera.app/docs/ides-and-tooling#problem-corrupt-caches).

### Documentation

Check out [the Package Docs](https://package.elm-lang.org/packages/dillonkearns/elm-pages/latest/). You can also use `npx elm-pages docs` from your project to view documentation for the `RouteBuilder` module.

## Running Scripts with `elm-pages run`

- Install dependencies with `npm install`.
- Run a script with `npx elm-pages run script/src/AddRoute.elm User.Id_` or `npx elm-pages run script/src/AddStaticRoute.elm HelloWorld`. You can also use a shorter command like `npx elm-pages run AddRoute User.Id_`.

## Contribution Philosophy

I aim to keep elm-pages-starter-express minimal and flexible, providing a straightforward foundation for various projects. I’m always open to PRs that improve the project while maintaining this simplicity. Feel free to contribute enhancements or fixes that align with this philosophy, and thank you for helping make the project better!
