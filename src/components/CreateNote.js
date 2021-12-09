import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';


const CreateNote = ({addNote, students}) => {
    
    let history = useHistory();
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [choice, setChoice] = useState("")
    const [loading, setLoading] = useState(false)


    function handleSubmit(e) {
        e.preventDefault()
        const noteObj = { 
            title: title,  
            description: description,
            student_id: choice
        }
        setLoading(true)
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
                setChoice("")
                setTimeout(() => {
                    setLoading(false)
                    history.push("/notes");      

                } ,1000)
            })
            
    };

const handleChoice = (e) => {
setChoice(e.target.value)
} 

const pickStudent = students.map(student => <option value={student.id}  key={student.id} data-id={student.id}>{student.name}</option>)


    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Notes</h2>

            <label htmlFor="name">Title:</label>
            <input type="text" id="name" value={title} onChange={(e) => setTitle(e.target.value)} />

            <label htmlFor="description">Description:</label>
            <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            

            <select name="student" className="form-select" aria-label="Default select example" onChange={handleChoice}>
                <option selected>Select Student</option>
                {pickStudent}
            </select>


        <button type="submit">{loading ? "loading..." : "Create New Note"}</button>
    </form>
    )
}

export default CreateNote
