import React from "react";

const CurrentNote = ({ currentNote, onNoteUpdate }) => {
  return (
    <div className="col-md-9">
      <div className="note-view_dateTimeStamp">
        <small>
          {currentNote.created.date} at {currentNote.created.time}
        </small>
      </div>
      <div contentEditable="true" onBlur={onNoteUpdate} className="note-view">
        {currentNote.content}
      </div>
    </div>
  );
};

export default CurrentNote;
