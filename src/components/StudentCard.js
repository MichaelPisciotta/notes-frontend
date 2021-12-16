import React from 'react'

const StudentCard = ({name, student, deleteStudent, id, image}) => {
console.log("student", student)

function handleDelete() {
    fetch(`http://localhost:9292/students/${id}`, {
        method: "DELETE"
    })
    .then((r) => { 
        //debugger
       return r.json()})
      .then(data => console.log(data));
       deleteStudent(id)
};
 
    return (
        <div className="card">
        
        <div className="container">
        <img src={image} className="photo" alt="student_image"/> 
           <br></br>
            {name} 
           <br></br>
           <br></br>
           <div className="notes">{student.notes.map((note) => ` Title: ${note.title} - Description: ${note.description}`)}</div>
           <br></br>
           <br></br>
           <button onClick={handleDelete}>Delete</button>
           </div>

        </div>
    )
}

export default StudentCard
