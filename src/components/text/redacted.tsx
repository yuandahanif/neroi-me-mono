import { Redacted_Script } from "next/font/google";

const redacted = Redacted_Script({
  subsets: ["latin"],
  weight: "400",
  preload: true,
});

const Redacted: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <span className={redacted.className}>{children}</span>;
};

export default Redacted;
