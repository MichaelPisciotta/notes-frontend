import React from 'react'

const StudentCard = ({name, student, deleteStudent, id}) => {
console.log(student)

function handleDelete() {
    fetch(`http://localhost:9292/students/${id}`, {
        method: "DELETE"
    })
    .then((r) => { 
        //debugger
       return r.json()})
      .then(data => console.log(data));
       deleteStudent(id)
}
 
    return (
        <div className="card">
           Student: {name} 
           <br></br>
           <br></br>
           Notes:
           <br></br>
           <br></br>
           {student.notes.map((note) => ` Title: ${note.title} - Description: ${note.description}`)}
           <br></br>
           <br></br>
           <button onClick={handleDelete}>Delete</button>

        </div>
    )
}

export default StudentCard
