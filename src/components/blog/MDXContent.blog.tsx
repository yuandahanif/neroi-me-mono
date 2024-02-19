import { Code } from "bright";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import { twMerge } from "tailwind-merge";

const MDXViewer = ({ content }: { content: MDXRemoteProps["source"] }) => {
  return (
    <MDXRemote
      source={content}
      components={{
        pre: (props) => (
          <Code
            {...props}
            lineNumbers
            theme={"github-dark"}
            lang="tsx"
            className={twMerge("not-prose", props.className)}
          >
            {props.children}
          </Code>
        ),
      }}
    />
  );
};

export default MDXViewer;
