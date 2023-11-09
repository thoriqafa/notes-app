import React, { useState } from "react";
import NotesItem from "./NotesItem";
import NoteSearch from "./NoteSearch";

function NotesList({ notes, onDelete }) {
    const [searchTerm, setSearchTerm] = useState("");

    if (notes.length === 0) {
        return <p>Tidak ada catatan</p>;
    }

    return (
        <div className="note-list">
            <NoteSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            {notes
                .filter((note) =>
                    note.title.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((note) => (
                    <NotesItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
                ))}
        </div>
    );
}

export default NotesList;