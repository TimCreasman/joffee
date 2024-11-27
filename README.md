# Joffee

A simple tool to find non-brand local coffee shops.

## Developing

### Install dependencies
```bash
bun install
```

```bash
bun run dev

# or start the server and open the app in a new browser tab
bun run dev -- --open
```

## Building

Solid apps are built with _presets_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `npm start`. To use a different preset, add it to the `devDependencies` in `package.json` and specify in your `app.config.js`.

## Testing

Tests are written with `vitest`, `@solidjs/testing-library` and `@testing-library/jest-dom` to extend expect with some helpful custom matchers.

To run them, simply start:

```sh
bun run test
```

