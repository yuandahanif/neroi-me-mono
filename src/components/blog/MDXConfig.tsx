import { Code } from "bright";
import { type MDXRemoteProps } from "next-mdx-remote/rsc";
import { cn } from "~/lib/utils";
import MdxImg from "./MDXClientComponent";

const components: MDXRemoteProps["components"] = {
  pre: (props) => (
    <Code
      lineNumbers
      // theme={"github-dark"}
      lang="tsx"
      style={{ width: "100%" }}
      // {...props}
      extensions={[]}
      className={cn("not-prose relative text-xs sm:text-sm", props.className)}
    >
      {props.children}
    </Code>
  ),
  ul: (props) => <ul className="list-outside list-disc" {...props} />,
  li: (props) => <li className="text-balance" {...props} />,
  a: (props) => (
    <a
      className="text-balance break-all hover:underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  img: (props) => (
    <MdxImg
      alt={props?.alt ?? "paceholder"}
      src={
        "https://safebooru.org//images/4590/8b9eaceb49800bb4e832f15ed7d14db3513a3215.png"
      }
    />
  ),
};

export { components };
