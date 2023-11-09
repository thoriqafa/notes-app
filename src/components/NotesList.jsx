import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete }) {
    if (notes.length === 0) {
        return <p>Tidak ada catatan</p>
    }

    return (
        <div className="note-list">
            {
                notes.map((note) => (
                    <NotesItem
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        {...note}
                    />
                ))
            }
        </div>
    );
}

export default NotesList;