import { Redacted_Script } from "next/font/google";
import { type ReactNode } from "react";

const redacted = Redacted_Script({ subsets: ["latin"], weight: "400" });

const Redacted: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <span className={redacted.className}>{children}</span>;
};

export default Redacted;
