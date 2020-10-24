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

  componentDidMount() {
    if (localStorage.getItem("savedNotes")) {
      this.setState({
        allNotes: JSON.parse(localStorage.getItem("savedNotes")),
      });
    } else {
      localStorage.setItem("savedNotes", "[]");
    }
  }

  handleStorage_post = (note) => {
    let savedNotes = JSON.parse(localStorage.getItem("savedNotes"));
    savedNotes.unshift(note);
    savedNotes = JSON.stringify(savedNotes);
    localStorage.setItem("savedNotes", savedNotes);
  };

  handleStorage_put = (notes) => {
    console.log(notes);
    const savedNotes = JSON.stringify(notes);
    localStorage.setItem("savedNotes", savedNotes);
  };

  handleStorage_delete = (notes) => {
    const savedNotes = JSON.stringify(notes);
    localStorage.setItem("savedNotes", savedNotes);
  };

  handleCreateNote = () => {
    const newNote = {
      title: "New Note",
      date: new Date(),
      content: "No additional text",
      id: Math.floor(Math.random() * 10000),
    };
    const allNotes = [newNote, ...this.state.allNotes];
    this.setState({ allNotes, currentNote: newNote });
    this.handleStorage_post(newNote);
  };

  handleDeleteNote = () => {
    let allNotes = [...this.state.allNotes];
    const index = allNotes.indexOf(this.state.currentNote);
    console.log(allNotes[index].id);

    let currentNote = {};
    if (allNotes.length > 1) {
      if (allNotes[index + 1] === undefined) {
        currentNote = allNotes[index - 1];
      } else {
        currentNote = allNotes[index + 1];
      }
    }

    allNotes = allNotes.filter((n) => n.id !== allNotes[index].id);
    console.log(allNotes);
    // Update UI first
    this.setState({ allNotes, currentNote });

    // Update DB
    this.handleStorage_delete(allNotes);
  };

  handleNoteUpdate = ({ currentTarget }) => {
    const allNotes = [...this.state.allNotes];
    const index = allNotes.indexOf(this.state.currentNote);
    allNotes[index].content = currentTarget.innerHTML;
    console.log(allNotes);
    this.setState({ allNotes });
    this.handleStorage_put(allNotes);
  };

  handleNoteSelect = (note) => {
    // const allNotes = [...this.state.allNotes];
    // const index = allNotes.indexOf(note);
    console.log(note);
    this.setState({ currentNote: note });
  };

  render() {
    return (
      <div className="App">
        <NavBar
          onCreateNote={this.handleCreateNote}
          onDeleteNote={this.handleDeleteNote}
          onBoldContent={this.handleBoldContent}
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
