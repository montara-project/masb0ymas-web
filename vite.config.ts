import { cloudflare } from '@cloudflare/vite-plugin'
import mdx from '@mdx-js/rollup'
import { cdnAdapter } from '@vinext/cloudflare/cache/cdn-adapter'
import { imagesOptimizer } from '@vinext/cloudflare/images/images-optimizer'
import remarkGfm from 'remark-gfm'
import vinext from 'vinext'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    // MDX must run before vinext so .mdx imports compile to React components.
    {
      enforce: 'pre',
      ...mdx({
        remarkPlugins: [remarkGfm],
      }),
    },
    vinext({
      cache: { cdn: cdnAdapter() },
      images: { optimizer: imagesOptimizer() },
    }),
    cloudflare({
      viteEnvironment: {
        name: 'rsc',
        childEnvironments: ['ssr'],
      },
    }),
  ],
})
