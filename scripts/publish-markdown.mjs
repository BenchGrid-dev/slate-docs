import { cpSync } from 'node:fs'
import { join } from 'node:path'

// Vocs writes Markdown exports under assets/md. A fully static deployment has
// no server to resolve the clean .md URLs listed in llms.txt.
for (const output of ['dist/public', ...(process.env.VERCEL ? ['.vercel/output/static'] : [])]) {
  cpSync(join(output, 'assets/md'), output, { recursive: true })
}
