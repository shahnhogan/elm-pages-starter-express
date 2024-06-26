# Elm Pages Starter Template with Express adapter

This is an example of using [elm-pages 3.0](https://github.com/dillonkearns/elm-pages) with [express.js](https://expressjs.com/).

You can see it running at <https://elm-pages-v3-express.fly.dev/>

Source code is available at <https://github.com/shahnhogan/elm-pages-starter-express>

See discussion on elm-pages adapters at <https://github.com/dillonkearns/elm-pages/discussions/378>

## The important parts

`adapters/express/adapter.mjs` runs at build time and puts the elm-pages renderer and express middleware and server into `dist-server/`.
See <https://elm-pages-v3.netlify.app/docs/adapters/> for details on elm-pages adapters.

After `npm run build`, the adapter will have generated the following files:

`dist-server/server.mjs` - a node express server configured for elm-pages.
This can be run directly with `node dist-server/server.mjs`.
This repo is set up to do that via `npm start`.

`dist-server/middleware.mjs` exports a default function that can be used to serve the elm-pages app via [express middleware](https://expressjs.com/en/guide/using-middleware.html).
You can use this to integrate into your existing express service, or if the generated server doesn't work for your needs.
**Note:** Any routes you don't want handled by elm-pages must come _before_ this middleware.
You will also need to point [express static middleware](https://expressjs.com/en/starter/static-files.html) at `dist`.

## Setup Instructions

`npm install` from the cloned repo. Before running the dev server or build, make sure to install Lamdera (see below).

`npm run dev` starts the dev server with hot reloading.

`npm run build` builds the app for production.

`npm start` starts the production server at `server.mjs`.

### Deployment

This example is deployed to [Fly.io](https://fly.io/), but can run anywhere that can serve a node app.

[Deploy your own with these instructions](https://fly.io/docs/languages-and-frameworks/node/).

Note: the default `Dockerfile` generated by flyctl will need some additions for elm-tooling and lamdera.
You can use the one in this repo directly or as a reference.

### Install Lamdera

`elm-pages` 3.0 uses the lamdera compiler, which is a superset of the Elm compiler with some extra functionality to automatically serialize Elm types to Bytes.

### Debugging Lamdera Errors

Sometimes Lamdera will give compiler errors due to corrupted dependency cache. These messages will display a note at the bottom:

```
-- PROBLEM BUILDING DEPENDENCIES ---------------

...


Note: Sometimes `lamdera reset` can fix this problem by rebuilding caches, so
give that a try first.
```

Be sure to use `lamdera reset` to reset the caches for these cases. See more info about that in the Lamdera docs: https://dashboard.lamdera.app/docs/ides-and-tooling#problem-corrupt-caches

### Docs

Check out [the Package Docs](https://package.elm-lang.org/packages/dillonkearns/elm-pages/latest/). You can also use `npx elm-pages docs` from your project to view the documentation for the `RouteBuilder` module.

## Running Scripts with `elm-pages run`

- `npm install`
- `npx elm-pages run script/src/AddRoute.elm User.Id_`, or `npx elm-pages run script/src/AddStaticRoute.elm HelloWorld` - now you can try out the generator! And you can tweak it, or even define new generator modules in the `script/` folder! You can also shorten this command to `npx elm-pages run AddRoute User.Id_` if you prefer.
