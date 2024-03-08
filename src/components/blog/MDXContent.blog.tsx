import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkUnwrapImages from "remark-unwrap-images";

import { components } from "./MDXConfig";
import MdxCode from "./MDXServerComponent";

const MDXViewer = ({ content }: { content: MDXRemoteProps["source"] }) => {
  return (
    <MDXRemote
      source={content}
      options={{ mdxOptions: { remarkPlugins: [remarkUnwrapImages] } }}
      components={{ ...components, pre: (props) => <MdxCode {...props} /> }}
    />
  );
};

export default MDXViewer;
