import { defineConfig } from 'vocs/config'

export default defineConfig({
  title: 'SlateOS Docs',
  description: 'Documentation for SlateOS, the open-source Linux desktop built for humans and AI agents.',
  renderStrategy: 'full-static',
  markdown: { output: { validation: 'fail' } },
  accentColor: 'light-dark(#28766b, #7dd2bd)',
  iconUrl: '/slate.svg',
  logoUrl: { light: '/slate-wordmark-light.svg', dark: '/slate-wordmark-dark.svg' },
  head: {
    base: false,
    ...(process.env.VERCEL_ENV === 'preview' ? { meta: { robots: 'noindex, nofollow' } } : {}),
  },
  ogImageUrl: 'https://slate.benchgrid.dev/opengraph-image',
  baseUrl: process.env.DOCS_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined),
  editLink: { link: 'https://github.com/BenchGrid-dev/slate-docs/edit/main/src/pages/:path' },
  sidebar: [
    { text: 'Home', link: '/' },
    {
      text: 'Get started',
      items: [
        { text: 'Overview', link: '/overview' },
        { text: 'Getting started', link: '/guides/getting-started' },
        { text: 'Use Slash on Linux or macOS', link: '/guides/slash' },
        { text: 'SlateOS on NixOS', link: '/guides/nixos' },
      ],
    },
    {
      text: 'Reference',
      items: [
        { text: 'Slash shell', link: '/reference/slash' },
        { text: 'Desktop and Wayland', link: '/reference/desktop' },
        { text: 'Approvals and policy', link: '/reference/policy' },
        { text: 'OS Skills', link: '/skills' },
      ],
    },
    {
      text: 'Development',
      items: [
        { text: 'Contributing', link: '/development/contributing' },
        { text: 'Architecture', link: '/development/architecture' },
        { text: 'Decision records', link: '/development/decisions' },
        { text: 'RFC process', link: '/development/rfcs' },
        { text: 'Desktop testing', link: '/development/testing/desktop' },
        { text: 'Image testing', link: '/development/testing/image' },
        { text: 'Releasing', link: '/development/releasing' },
        { text: 'Code of conduct', link: '/development/code-of-conduct' },
      ],
    },
    { text: 'Roadmap', link: '/roadmap' },
    { text: 'Changelog', link: '/changelog' },
  ],
  topNav: [
    { text: 'SlateOS', link: 'https://slate.benchgrid.dev' },
    { text: 'GitHub', link: 'https://github.com/BenchGrid-dev/slate' },
  ],
})
