import React from "react";

const NoteSideBar = ({ notes, currentNote, onNoteSelect }) => {
  console.log(notes);
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
          <p>{note.title}</p>
          {/* <div>
              {JSON.parse(note.date}
          </div> */}
          <p>{note.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default NoteSideBar;
