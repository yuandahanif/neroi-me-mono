import React, { useEffect } from "react";
import { useQuill } from "react-quilljs";
import Quill from "quill";

import "quill/dist/quill.snow.css";

interface Props {
  defaultValue?: string;
  onChange: (value: string) => void;
}

function imageHandler(this: { [x: string]: any; image: () => void }) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const range = this.quill.getSelection();
  const value = prompt("What is the image URL");
  if (value) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    this.quill?.insertEmbed(range.index, "image", value, Quill.sources.USER);
  }
}

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
      syntax: {},
      toolbar: {
        handlers: {
          image: imageHandler,
        },
        container: [
          ["bold", "italic", "underline"],
          [{ header: [2, 3, 4, 5, 6, false] }],
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
    <div className="min-h-[400px] w-full min-w-[500px] max-w-[60cm]">
      <div ref={quillRef} className="h-full resize text-2xl" />
    </div>
  );
};

export default Editor;
