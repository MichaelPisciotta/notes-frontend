import React from 'react'

const NoteList = ({notes, deleteNote}) => {
    

    const noteList = Note.map(note => <NoteCard notes={notes} title={title} description={description} deleteNote={deleteNote}  />)
    return (
        <div>
            {noteList}
        </div>
    )
}

export default NoteList

