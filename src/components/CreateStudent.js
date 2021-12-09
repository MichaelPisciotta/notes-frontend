import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

const CreateStudent = ({addStudent}) => {
    
    let history = useHistory();
    const [name, setName] = useState("")
    const [loading, setLoading] = useState(false)

    
    function handleSubmit(e) {
        e.preventDefault()
        const studentObj = { 
            name: name
        }
        setLoading(true)
        fetch("http://localhost:9292/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(studentObj)
        })
            .then(r => r.json())
            .then(data => {
                //debugger;
                addStudent(data)
                setName("")
                setTimeout(() => {
                    setLoading(false)
                    history.push("/students");      

                } ,1000)
            })   

    };

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Create Students</h2>

                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

                <button type="submit">{loading ? "loading..." : "Create New Student"}</button>
            </form>
        </div>
    )
}

export default CreateStudent

