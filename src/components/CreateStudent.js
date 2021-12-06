import React, {useState} from 'react';

const CreateStudent = ({addStudent}) => {

    const [name, setName] = useState("")

    
    function handleSubmit(e) {
        e.preventDefault()
        const studentObj = { 
            name: name
        }
        fetch("http://localhost:9292/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(studentObj)
        })
            .then(r => r.json())
            .then(data => {
                addStudent(data)
                setName("")
            })
            
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Create Students</h2>

                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

                <button type="submit">Create New Student</button>
            </form>
        </div>
    )
}

export default CreateStudent

