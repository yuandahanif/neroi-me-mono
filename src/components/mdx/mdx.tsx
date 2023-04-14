import { MDXRemote } from "next-mdx-remote";
import type { MDXContent } from "~/libs/mdx";

export type MDXProps = {
  content: MDXContent;
  components?: Record<string, React.ReactNode>;
};

export const MDX: React.FC<MDXProps> = ({ content, components = {} }) => (
  <MDXRemote
    {...content}
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    components={{
      // add global custom components above this line
      ...components,
    }}
  />
);
