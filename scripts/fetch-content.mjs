/**
 * One-off content migration: pulls the real articles from masb0ymas.com,
 * converts the <article class="prose"> region to markdown (turndown + GFM),
 * sanitizes MDX hazards, and writes content/{blog,projects}/<slug>.mdx.
 *
 * Run: node scripts/fetch-content.mjs
 */
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import TurndownService from 'turndown'
import { gfm } from 'turndown-plugin-gfm'

const ORIGIN = 'https://masb0ymas.com'

const BLOG_SLUGS = [
  'bagaimana-cara-setup-git-dan-github-pada-local-device',
  'how-to-use-github-action-for-ci-cd-and-push-to-google-artifact-registry',
  'how-to-install-react-native-on-different-platforms',
  'how-to-use-environment-variables-in-sveltekit',
  'how-to-dump-and-restore-a-postgres-database-from-a-docker-container',
  'how-do-you-implement-an-nft-smart-contract-with-remix-and-publish-it-on-open-sea',
  'creating-a-simple-nft-smart-contract-with-solidity-and-hardhat',
  'how-to-use-traefik-proxy-with-docker-compose',
  'why-i-use-semantic-versioning',
  'how-to-release-a-version-of-a-web-app-using-github-workflow-with-github-actions',
]

const PROJECT_SLUGS = [
  'web-programming-hack',
  'seadev',
  'boatwork',
  'moneyflow-id',
  'arif-analytics',
  'defi-calculator',
  'kickstarter',
]

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
  emDelimiter: '*',
})

turndown.use(gfm)

// Preserve the code language from class="language-*" on fenced blocks.
turndown.addRule('fencedCodeBlock', {
  filter(node) {
    return node.nodeName === 'PRE' && (!node.firstChild || node.firstChild.nodeName === 'CODE')
  },
  replacement(_content, node, options) {
    const firstChild = node.firstChild
    const code = firstChild ? firstChild.textContent : ''
    const className = firstChild?.getAttribute('class') ?? ''
    const language = (className.match(/language-(\S+)/) ?? [])[1] ?? ''
    const fenceChar = options.fence.charAt(0)
    let fenceSize = 3
    const fenceInCodeRegex = new RegExp(`^\\s{0,3}${fenceChar}{${fenceSize},}`, 'gm')
    let matcher
    while ((matcher = fenceInCodeRegex.exec(code))) {
      if (matcher[0].length >= fenceSize) fenceSize = matcher[0].length + 1
    }
    const fence = Array.from({ length: fenceSize + 1 }, () => fenceChar).join('')
    return `\n\n${fence}${language}\n${code.replace(/\n$/, '')}\n${fence}\n\n`
  },
})

/** Rewrite next/image optimizer URLs to absolute real image URLs. */
function absolutizeImages(html) {
  return html.replace(
    /src="\/_next\/image\?url=([^&"]+)[^"]*"/g,
    (_match, encoded) => `src="${ORIGIN}${decodeURIComponent(encoded)}"`
  )
}

/** Decode Cloudflare email-protection placeholders back to the real addresses. */
function decodeCloudflareEmails(html) {
  return html.replace(
    /<(a|span)[^>]*data-cfemail="([0-9a-f]+)"[^>]*>[\s\S]*?<\/\1>/g,
    (_match, _tag, hex) => {
      const bytes = hex.match(/.{2}/g).map((byte) => Number.parseInt(byte, 16))
      const key = bytes[0]
      return bytes
        .slice(1)
        .map((byte) => String.fromCharCode(byte ^ key))
        .join('')
    }
  )
}

/** Escape MDX-sensitive characters outside of fenced/inline code, decode stray entities. */
function sanitizeForMdx(markdown) {
  const parts = markdown.split(/^(```[\s\S]*?```)$/gm)
  return parts
    .map((part, index) => {
      if (index % 2 === 1) return part // fenced code stays untouched

      // Protect inline code spans from escaping (they render literally).
      const spans = []
      const withoutSpans = part.replace(/(`+[^`]*`+)/g, (match) => {
        spans.push(match)
        return `@@SPAN${spans.length - 1}@@`
      })

      const cleaned = withoutSpans
        .replace(/&amp;/g, '&')
        .replace(/</g, '\\<')
        .replace(/\{/g, '\\{')
        .replace(/\]\((\/[^)]*)\)/g, `](${ORIGIN}$1)`)
        .replace(/\n{3,}/g, '\n\n')

      return cleaned.replace(/@@SPAN(\d+)@@/g, (_, i) => spans[Number(i)])
    })
    .join('')
}

/** Remove the tag strip / date breadcrumb lines the detail pages prepend. */
function stripLeadingJunk(markdown) {
  const lines = markdown.split('\n')
  let index = 0
  while (index < lines.length) {
    const line = lines[index].trim()
    if (line === '' || /^\d{1,2} \w+ 20\d{2}$/.test(line) || /^[^\s]+$/.test(line)) {
      index += 1
      continue
    }
    break
  }
  return lines.slice(index).join('\n')
}

function extractArticle(html) {
  const start = html.search(/<article[^>]*>/)
  if (start === -1) return null
  const end = html.indexOf('</article>', start)
  if (end === -1) return null
  return html.slice(start, end + '</article>'.length)
}

/**
 * Pages are pre-downloaded to /tmp/masb0ymas-html/<kind>-<slug>.html via curl
 * (curl passes the site's bot checks where Node's fetch is blocked).
 */
async function convert(slug, kind) {
  const { readFile } = await import('node:fs/promises')
  const html = decodeCloudflareEmails(
    absolutizeImages(await readFile(`/tmp/masb0ymas-html/${kind}-${slug}.html`, 'utf8'))
  )
  const article = extractArticle(html)
  if (!article) throw new Error(`${kind}/${slug}: no <article> found`)

  let markdown = turndown.turndown(article).trim()

  // Drop a leading H1 — the detail page renders its own title header.
  markdown = markdown.replace(/^# .+\n+/, '')
  markdown = stripLeadingJunk(markdown)
  markdown = sanitizeForMdx(markdown)

  const outDir = path.join('content', kind === 'blog' ? 'blog' : 'projects')
  await mkdir(outDir, { recursive: true })
  const file = path.join(outDir, `${slug}.mdx`)
  await writeFile(file, markdown + '\n')
  return { file, bytes: Buffer.byteLength(markdown) }
}

const jobs = [
  ...BLOG_SLUGS.map((slug) => ({ slug, kind: 'blog' })),
  ...PROJECT_SLUGS.map((slug) => ({ slug, kind: 'projects' })),
]

const results = []
for (const job of jobs) {
  try {
    results.push(await convert(job.slug, job.kind))
    console.log(`ok   ${job.kind}/${job.slug} (${results.at(-1).bytes} bytes)`)
  } catch (error) {
    console.error(`FAIL ${job.kind}/${job.slug}: ${error.message}`)
  }
}
console.log(`\nDone: ${results.filter(Boolean).length}/${jobs.length} files`)
