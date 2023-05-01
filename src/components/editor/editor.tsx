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
          return hljs.highlightAuto(text).value;
        },
      },
      toolbar: {
        handler: {},
        container: [
          ["bold", "italic", "underline"],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image", "video"],
          ["clean"],
          ["blockquote", "code-block"],
          [{ color: [] }, { background: [] }],
        ],
      },
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
    <div className="h-[300px] min-w-[500px] text-2xl max-w-[60cm]">
      <div ref={quillRef}  className="text-2xl"/>
    </div>
  );
};

export default Editor;
