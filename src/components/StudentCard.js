import React from 'react'

const StudentCard = ({name, student}) => {
console.log(student)
 
    return (
        <div>
           name: {name} 
           <br></br>
           {student.notes.map((note) => `${note.title} - ${note.description}`)}

        </div>
    )
}

export default StudentCard
