# remix-test

To begin with, I'm following
the [Remix "Jokes" app tutorial](https://remix.run/docs/en/v1/tutorials/jokes).

Idea: make it store random facts instead of jokes.

## Learning notes

- Remix nuked this `README.md` file and I had to recreate it. Should have expected that! Adding the
  contents below instead.
- The default `entry.server.tsx` file contains a `handleRequest` function that takes a `request`.
  That's fine, but it also takes a `responseStatusCode` and `responseHeaders`. Am I still able to
  decide what status code to respond with? This signature is a bit weird to me.
- Since Remix picks up on certain exports from files (like `export const meta`) but my IDE doesn't
  know about that, I'm getting a bunch of linter errors on those lines. I'm not sure where the
  errors are coming from, since from my recollection `eslint` doesn't complain about unused exports.
  It has no knowledge of the other files. It's probably IntelliJ then.
- The default `root.tsx` contains several interesting elements:
  - `<Outlet />` which is like a Svelte `<slot />`, as far as I remember.
  - `<ScrollRestoration />`, probably aptly-named. Its presence surprises me because this used to be
    a feature of `react-router` that got [dropped][rr-scroll-res] after the developers noticed
    scroll restoration working increasingly better out of the box on major browsers.
    - [ ] To-do: find out how `<ScrollRestoration />` is implemented.
    - Remix [documentation on scroll restoration][rm-scroll-res] mentions that this component works
      by restoring the scroll level before rehydration. This should eliminate the jarring effect of
      having the scroll point being restored after the page loads completely.
      - The "before rehydration" part is true only by virtue of the `<ScrollRestoration />`
        component being used one line before the `<Scripts />` component.
- The `yarn build` command finished in 0.44 seconds. Nice!
- I like that the default app doesn't contain images or marketing text selling Remix. It just has
  some documentation links.
- While adding some code and missing an import, the app showed me a build error (expectedly). But
  then after fixing the error, the app didn't go back to a normal state, and the error remained,
  even though the build didn't show the error any longer.
- Adding the new routes, I'm thinking that the structure where `facts/new` shares a namespace
  with `facts/$factId` is not great. What if I wanted slugs instead of IDs, and someone created a
  fact named `new`? Other solutions aren't as pretty, though: `facts/show/$factId + facts/new`,
  or `new-fact + facts/$factId`.

[rr-scroll-res]: https://v5.reactrouter.com/web/guides/scroll-restoration

[rm-scroll-res]: https://remix.run/docs/en/v1/api/remix#scrollrestoration

## Default Remix `README.md`

- [Remix Docs](https://remix.run/docs)

### Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

### Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

#### DIY

If you're familiar with deploying node applications, the built-in Remix app server is
production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

#### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again
to create a new project, then copy over your `app/` folder to the new project that's pre-configured
for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```
