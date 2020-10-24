import React from "react";

const NavBar = ({
  onCreateNote,
  onDeleteNote,
  isButtonDisabled,
  onBoldContent,
}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <button onClick={onCreateNote} className="btn btn-primary mr-2">
            Create note
          </button>
          <button
            onClick={onDeleteNote}
            className="btn btn-danger"
            disabled={isButtonDisabled}
          >
            Delete note
          </button>
          <button onClick={onBoldContent}>Bold</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
