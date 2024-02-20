import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import { components } from "./MDXConfig";

const MDXViewer = ({ content }: { content: MDXRemoteProps["source"] }) => {
  return <MDXRemote source={content} components={components} />;
};

export default MDXViewer;
