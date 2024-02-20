import { Code } from "bright";
import { type MDXRemoteProps } from "next-mdx-remote/rsc";
import { twMerge } from "tailwind-merge";

const components: MDXRemoteProps["components"] = {
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
};

export { components };
