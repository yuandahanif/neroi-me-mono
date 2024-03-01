const useReadTime = (ref: React.RefObject<HTMLElement>) => {
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
