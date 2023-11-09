import React from "react";
import DeleteButton from "./DeleteButton";

function NotesItem({ id, title, body, onDelete }){
    return (
        <div className="note-item">
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__body">{body}</p>
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    );
}

export default NotesItem;