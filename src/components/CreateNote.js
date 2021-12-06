import React, {useState} from 'react'

const CreateNote = ({addNote, students}) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


     
    function handleSubmit(e) {
        e.preventDefault()
        const noteObj = { 
            title: title,  
            description: description,
            student_id: student_id
        }
        fetch("http://localhost:9292/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(noteObj)
        })
            .then(r => r.json())
            .then(data =>{
                addNote(data)
                setTitle("")
                setDescription("")
            })
            
    };

    const studentOptions = students.map(student => <option>{student.name}</option>)


    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Notes</h2>

            <label htmlFor="name">Title:</label>
            <input type="text" id="name" value={title} onChange={(e) => setTitle(e.target.value)} />

            <label htmlFor="description">Description:</label>
            <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            

            <select name="student" class="form-select" aria-label="Default select example">
                <option selected>Select Student</option>
                <option value={studentOptions}></option>
            </select>


        <button type="submit">Create New Note</button>
    </form>
    )
}

export default CreateNote
