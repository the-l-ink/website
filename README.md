# The Link Website

The website and documentation for [The Link](https://the-l.ink), a composable
bidirectional event-routing contract with adapters for HTTP, local processes,
Workers, browser frames, tabs, and React.

## Development

```sh
bun install --frozen-lockfile
bun run dev
```

The local site is available at `http://localhost:3000`.

## Verification

```sh
bun run types:check
bun run build
```

Documentation lives in `content/docs`. Fumadocs generates navigation, search,
Markdown endpoints, and page metadata from that source.

## Cloudflare Workers

Build and test the Worker locally:

```sh
bun run build:vinext
bun run start:vinext
```

For Cloudflare Workers Builds, use:

```txt
Build command:  bun run build:vinext
Deploy command: bun run deploy:vinext
```
