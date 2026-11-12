# SlateOS Docs

Documentation for [SlateOS](https://github.com/BenchGrid-dev/slate), built with [Vocs](https://vocs.dev/).

## Develop locally

Use Node.js 24 and npm:

```sh
npm ci
npm run dev
npm run build
```

Pages live in `src/pages/`, navigation in `vocs.config.ts`, and static assets in `public/`.

## Deploy on Vercel

Import `BenchGrid-dev/slate-docs` and select `main` as the production branch. The project builds from the repository root. `vercel.json` provides the install command (`npm ci`), build command (`npm run build`), and static output directory (`dist/public`). Use Node.js 24. No environment variables are required.

After a normal local build, use `npm run preview` to inspect the production output.

See the [Vocs Vercel guide](https://vocs.dev/deployment/vercel) for details.

## Content and maintenance

This site brings over the English documentation from [SlateOS `c658ecf`](https://github.com/BenchGrid-dev/slate/tree/c658ecfe1cddce9d44f8c674ef352ff37dcabe77), including the overview, reference and developer guides, decisions, and all 18 OS Skills. The home page and guides for SlateOS and standalone Slash provide entry points into that material.

Edit the MDX files here for the published site. Keep bundled `SKILL.md` files and their `manifest.toml` files in the Slate repository: the installed runtime ships them from that tree. GitHub issue and pull request templates also stay there. Source-code links in the migrated documentation are pinned to the source revision where applicable.

Run `npm run build` before pushing. Vocs checks document links and creates the local search index. The post-build step makes `/llms.txt`, `/llms-full.txt`, and the per-page `.md` URLs work on static hosting. The optional `DOCS_URL` environment variable sets the canonical URL; on Vercel, the production URL is used automatically when available.

## License

SlateOS documentation is available under GPL-3.0-or-later. See [LICENSE](LICENSE).
