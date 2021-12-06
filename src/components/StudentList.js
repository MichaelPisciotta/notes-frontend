import React from 'react'

const StudentList = ({students, deleteStudent}) => {
    
    const StudentList = Student.map(student => <StudentCard students={students} name={name} deleteStudent={deleteStudent}  />)

    return (
        <div>
        {StudentList}
        </div>
    )
}

export default StudentList
