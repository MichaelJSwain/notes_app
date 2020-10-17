import React, { Component } from "react";
import NavBar from "./components/navBar";
import Note from "./components/note";
import NoteSideBar from "./components/noteSideBar";
import CurrentNote from "./components/currentNote";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allNotes: [],
      currentNote: {},
    };
  }

  handleCreateNote = () => {
    console.log("note created");
    const newNote = {
      title: "New Note",
      date: new Date(),
      content: "No additional text",
      id: Math.floor(Math.random() * 10000),
    };
    console.log(newNote.date);
    const allNotes = [newNote, ...this.state.allNotes];
    this.setState({ allNotes, currentNote: newNote });
  };

  handleDeleteNote = (note) => {
    let allNotes = [...this.state.allNotes];
    const index = allNotes.indexOf(this.state.currentNote);

    let currentNote = {};
    if (allNotes.length > 1) {
      if (allNotes[index + 1] === undefined) {
        currentNote = allNotes[index - 1];
      } else {
        currentNote = allNotes[index + 1];
      }
    }

    allNotes = allNotes.filter((n) => n.id !== this.state.currentNote.id);
    console.log(allNotes);
    this.setState({ allNotes, currentNote });
  };

  handleNoteUpdate = ({ currentTarget }) => {
    const allNotes = [...this.state.allNotes];
    const index = allNotes.indexOf(this.state.currentNote);
    allNotes[index].content = currentTarget.innerHTML;

    this.setState({ allNotes });
  };

  handleNoteSelect = (note) => {
    // const allNotes = [...this.state.allNotes];
    // const index = allNotes.indexOf(note);
    this.setState({ currentNote: note });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <NavBar
          onCreateNote={this.handleCreateNote}
          onDeleteNote={this.handleDeleteNote}
          isButtonDisabled={this.state.currentNote.content ? false : true}
        />
        <div className="row">
          <NoteSideBar
            notes={this.state.allNotes}
            currentNote={this.state.currentNote}
            onNoteSelect={this.handleNoteSelect}
          />
          {this.state.currentNote.content && (
            <CurrentNote
              currentNote={this.state.currentNote}
              onNoteUpdate={this.handleNoteUpdate}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
