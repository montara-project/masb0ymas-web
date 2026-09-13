declare module '*.mdx' {
  import type { ComponentType } from 'react'

  /** Compiled MDX document, renderable as a React component. */
  const MDXContent: ComponentType<Record<string, unknown>>
  export default MDXContent
}
