import { defineConfig } from 'vocs/config'

export default defineConfig({
  title: 'SlateOS Docs',
  description: 'Documentation for SlateOS, the open-source Linux desktop built for humans and AI agents.',
  renderStrategy: 'full-static',
  accentColor: 'light-dark(#28766b, #7dd2bd)',
  iconUrl: '/slate.svg',
  sidebar: [{ text: 'Overview', link: '/' }],
  topNav: [
    { text: 'SlateOS', link: 'https://slate.benchgrid.dev' },
    { text: 'GitHub', link: 'https://github.com/BenchGrid-dev/slate' },
  ],
})
