import { useQuill } from "react-quilljs";
import React, { useEffect } from "react";

import "quill/dist/quill.snow.css";

interface Props {
  defaultValue?: string;
  onChange: (value: string) => void;
}

const Editor: React.FC<Props> = ({ onChange, defaultValue }) => {
  const { quill, quillRef } = useQuill();

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        // console.log("Text change!");
        // console.log(quill.getText()); // Get text only
        // console.log(quill.getContents()); // Get delta contents
        // console.log(quill.root.innerHTML); // Get innerHTML using quill
        // console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
        onChange(quill.root.innerHTML);
      });
    }
  }, [onChange, quill]);

  useEffect(() => {
    if (quill && defaultValue) {
      quill.clipboard.dangerouslyPasteHTML(defaultValue);
    }
  }, [quill, defaultValue]);

  return (
    <div className="h-[300px] min-w-[500px]">
      <div ref={quillRef} />
    </div>
  );
};

export default Editor;
