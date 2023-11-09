import React from "react";
import NotesList from "./NotesList";
import { getData } from "../utils/data";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getData(),
        }
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return{
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date(),
                    }
                ]
            }
        });
    }

    render() {
        return(
            <div className="note-app">
                <h1>Aplikasi Catatan Pribadi</h1>
                <h2>Add Note</h2>
                <NoteInput addNote={this.onAddNoteHandler} />
                <h2>List of Note</h2>
                <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} />
            </div>
        );
    }
}

export default NoteApp;