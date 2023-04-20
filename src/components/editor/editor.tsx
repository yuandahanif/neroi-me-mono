import { useQuill } from "react-quilljs";
import React, { useEffect } from "react";
import hljs from "highlight.js";

import "quill/dist/quill.snow.css";

interface Props {
  defaultValue?: string;
  onChange: (value: string) => void;
}

hljs.configure({
  languages: ["javascript", "ruby", "python", "rust"],
});

const Editor: React.FC<Props> = ({ onChange, defaultValue }) => {
  const { quill, quillRef } = useQuill({
    formats: [
      "header",
      "font",
      "size",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
      "video",
      "code-block",
    ],
    modules: {
      syntax: {
        highlight: (text: string) => {
          console.log(text);

          return hljs.highlightAuto(text).value;
        },
      },
      toolbar: [
        ["bold", "italic", "underline", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image", "video"],
        ["clean"],
        ["code-block"],
      ],
      clipboard: {
        matchVisual: false,
      },
    },
  });

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
