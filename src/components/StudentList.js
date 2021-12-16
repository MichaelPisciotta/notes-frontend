import React from 'react'
import StudentCard from "./StudentCard";

const StudentList = ({students, deleteStudent}) => {
    
    const studentCards = students.map(student => <StudentCard key={student.id} deleteStudent={deleteStudent}  name={student.name} student={student} id={student.id} image={student.image_url}  />)

    return (
        <div>
        {studentCards}
        </div>
    )
}

export default StudentList
