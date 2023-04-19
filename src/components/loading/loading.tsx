import { useEffect, useState } from "react";

const Loading = () => {
  const [dots, setDots] = useState(".");
  useEffect(() => {
    const t = setInterval(() => {
      setDots((s) => `${s} .`);
    }, 200);

    return () => clearInterval(t);
  }, []);
  return <div>Loading {dots}</div>;
};

export default Loading;
