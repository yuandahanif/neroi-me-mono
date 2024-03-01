import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkUnwrapImages from "remark-unwrap-images";
import { components } from "./MDXConfig";

const MDXViewer = ({ content }: { content: MDXRemoteProps["source"] }) => {
  return (
    <MDXRemote
      options={{ mdxOptions: { remarkPlugins: [remarkUnwrapImages] } }}
      source={content}
      components={components}
    />
  );
};

export default MDXViewer;
