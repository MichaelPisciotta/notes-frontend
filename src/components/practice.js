const students = [{name: "mike"},{name: "luke"},{name: "jack"}]

function studentCard(student){
    
    return(
        `<p>${student.name} ${student.grade}<p/>`
    )
}



studentCards = students.map((student) => studentCard(student))