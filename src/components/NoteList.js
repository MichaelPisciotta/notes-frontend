import React from 'react'
import NoteCard from "./NoteCard";

const NoteList = ({notes, deleteNote, title, description}) => {
    

    const noteList = notes.map(note => <NoteCard notes={notes} title={title} description={description} deleteNote={deleteNote}  />)
    return (
        <div>
            {noteList}
        </div>
    )
}

export default NoteList

