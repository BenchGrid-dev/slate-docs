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

See the [Vocs Vercel guide](https://vocs.dev/deployment/vercel) for details.

## License

SlateOS documentation is available under GPL-3.0-or-later. See [LICENSE](LICENSE).
