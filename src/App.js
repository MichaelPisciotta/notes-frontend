import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom"; 
import NavBar from "./components/NavBar";
import CreateStudent from "./components/CreateStudent";
import CreateNote from "./components/CreateNote";
import StudentList from "./components/StudentList";
import NoteList from "./components/NoteList";


function App() {
  const [students, setStudents] = useState([])
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/students")
      .then((r) => r.json())
      .then(data => {
        console.log("students", data)
        setStudents(data)
      });
  }, [])
  
  useEffect(() => {
    fetch("http://localhost:9292/notes")
      .then((r) => r.json())
      .then(data => setNotes(data));
  }, [])


  function addStudent(newStudent){
    const updatedStudents = [...students, newStudent]
    setStudents(updatedStudents)

  }

  function addNote(newNote){
    const updatedNotes = [...notes, newNote]
    setNotes(updatedNotes)

  }

  function deleteStudent(id) {
    const updatedStudents = students.filter(student => student.id !== id)
    setStudents(updatedStudents)
  }

  function deleteNote(id) {
    const updatedNotes = notes.filter(note => note.id !== id)
    setNotes(updatedNotes)
  }

  return (
    <div className="App">
    <Router>
        <NavBar />
        <Switch>

                <Route exact path="/notes">
                    <NoteList notes={notes} deleteNote={deleteNote} />
                </Route>

                <Route exact path="/students">
                    <StudentList students={students} deleteStudent={deleteStudent} />
                </Route>

                <Route path="/students/new">
                    <CreateStudent addStudent={addStudent}/>
                </Route>

                <Route exact path="/notes/new">
                    <CreateNote addNote={addNote} students={students} />
                </Route>             
                
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
