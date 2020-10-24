import React from "react";

const NoteSideBar = ({ notes, currentNote, onNoteSelect }) => {
  console.log(notes[0]);
  return (
    <ul className="list-group col-md-3" style={{ marginRight: "0px" }}>
      {notes.map((note) => (
        <li
          key={note.id}
          className={
            note.id === currentNote.id
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onNoteSelect(note)}
        >
          {/* <p>{note.content}</p> */}
          <div className="note-sidebar_secondary">
            <span className="mr-2">{note.created.time}</span>
            <p>
              <strong>
                {" "}
                {note.content.length > 20
                  ? `${note.content.substring(0, 20)}...`
                  : note.content}
              </strong>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NoteSideBar;
