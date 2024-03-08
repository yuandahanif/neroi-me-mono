import { type MDXRemoteProps } from "next-mdx-remote/rsc";
import MdxImg from "./MDXClientComponent";

const components: MDXRemoteProps["components"] = {
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
  img: (props) => <MdxImg alt={props?.alt ?? "paceholder"} src={props?.src} />,
};

export { components };
