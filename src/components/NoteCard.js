import React from 'react'

const NoteCard = ({title, description, deleteNote, id}) => {

    function handleDelete() {
        fetch(`http://localhost:9292/notes/${id}`, {
            method: "DELETE"
        })
        .then((r) => { 
            //debugger
           return r.json()})
          .then(data => console.log(data));
           deleteNote(id)
    }
    
    return (
        <div className="card">
        <div className="container">
        Title: {title}
        <br></br>
        description: {description}
        <br></br>
        <button onClick={handleDelete}>Delete</button>
        </div>
        </div>
    )
}

export default NoteCard
