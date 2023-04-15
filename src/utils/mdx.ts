import { serialize } from 'next-mdx-remote/serialize'

export type MDXContent = {
  compiledSource: string
  frontmatter?: Record<string, string>
}

export const fetchMDXContent = async (file: string): Promise<MDXContent> =>
  await serialize(file, {
    mdxOptions: {
      remarkPlugins: [
        // optional plugins
      ],
      rehypePlugins: [
        // optional plugins
      ],
      
    },
    parseFrontmatter: true
  })