"use client";

import { components } from "./MDXConfig";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote";
import { twMerge } from "tailwind-merge";

const MDXClientPreview = ({ source }: { source: MDXRemoteProps }) => {
  return (
    <MDXRemote
      {...source}
      components={{
        ...components,
        pre: (props) => (
          <pre>
            <span># ignore this; this is placeholder style</span>
            <br />
            <code {...props} className={twMerge("not-prose", props.className)}>
              {props.children}
            </code>
          </pre>
        ),
      }}
    />
  );
};

export default MDXClientPreview;
