import React from "react";

const CurrentNote = ({ currentNote, onNoteUpdate }) => {
  return (
    <div
      contentEditable="true"
      onBlur={onNoteUpdate}
      className="note-view col-md-9"
    >
      {currentNote.content}
    </div>
  );
};

export default CurrentNote;
