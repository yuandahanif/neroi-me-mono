import { type MutableRefObject, useEffect } from "react";

function useDialogClickOutside(
  ref: MutableRefObject<HTMLDialogElement | null>,
  handler?: (e: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      const dialogDimensions = ref?.current?.getBoundingClientRect();

      if (
        dialogDimensions &&
        (e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom)
      ) {
        ref?.current?.close();
        handler ? handler(e) : null;
      }
    };

    document.addEventListener("click", listener);
    return () => {
      document.removeEventListener("click", listener);
    };
  }, [ref, handler]);
}

export default useDialogClickOutside;
