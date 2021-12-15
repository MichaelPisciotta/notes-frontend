const students = [{name: "mike", id: 1},{name: "luke", id: 2},{name: "jack", id: 3}]

function updateStudent(updatedStudent){
    students.map((student) => {
        student.name.toUpperCase()
    })
}



// function studentCard(student){
    
//     return(
//         `<p>${student.name} ${student.grade}<p/>`
//     )
// }


// studentCards = students.map((student) => studentCard(student))

