import { type MutableRefObject } from "react";

const useReadTime = (ref: MutableRefObject<HTMLDivElement | null>) => {
  if (ref.current) {
    const text = ref.current.innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    return time;
  }

  return NaN;
};

export default useReadTime;
