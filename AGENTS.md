<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Development

Install dependencies with `npm ci`, then start the site with `npm run dev`. Open http://localhost:3000.

Next.js treats `localhost` and `127.0.0.1` as different dev origins. The dev websocket is rejected for `127.0.0.1`, and client features such as product search do not hydrate there. Use `localhost`.
