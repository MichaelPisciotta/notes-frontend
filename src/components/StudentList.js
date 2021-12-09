import React from 'react'
import StudentCard from "./StudentCard";

const StudentList = ({students, deleteStudent}) => {
    
    const studentCards = students.map(student => <StudentCard key={student.id} deleteStudent={deleteStudent}  name={student.name} student={student} id={student.id}  />)

    return (
        <div>
        {studentCards}
        </div>
    )
}

export default StudentList
