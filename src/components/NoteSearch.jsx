import React from "react";

function NoteSearch({ searchTerm, onSearchChange }) {
    return (
        <input
            type="text"
            placeholder="Search Title..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
        />
    );
}

export default NoteSearch;