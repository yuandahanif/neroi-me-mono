"use server";

import { Code } from "bright";
import { cn } from "~/lib/utils";

const MdxCode = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLPreElement>,
    HTMLPreElement
  >
) => {
  return (
    <Code
      lineNumbers
      // theme={"github-dark"}
      lang="tsx"
      style={{ width: "100%" }}
      extensions={[]}
      className={cn("not-prose relative text-xs sm:text-sm", props?.className)}
    >
      {props?.children}
    </Code>
  );
};

export default MdxCode;
