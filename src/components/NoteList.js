import React from 'react'
import NoteCard from "./NoteCard";

const NoteList = ({notes, deleteNote}) => {
    

    const noteList = notes.map(note => <NoteCard key={note.id} notes={notes} title={note.title} description={note.description} deleteNote={deleteNote} id={note.id} />)
    return (
        <div>
            {noteList}
        </div>
    )
}

export default NoteList

