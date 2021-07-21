import React, { useState } from "react";
import { Editor, EditorState } from "draft-js";

const document = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  return (
    <div>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
};

export default document;
