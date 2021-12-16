// import React, {useState} from 'react';

// const SearchStudent = ({students}) => {
    
//     const [studentName, setStudentName] = useState("")
    
//     function handleSubmit(e) {
//         e.preventDefault()
//         const studentObj = { 
//             name: name,
//             image_url: image
//         }
//         fetch("http://localhost:9292/students", {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(studentObj)
//         })
//             .then(r => r.json())
//             .then(data => {
//                 console.log(data)
//             })   
//     };
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <h2>Search for Students By Name</h2>

//                 <label htmlFor="student">Student:</label>
//                 <input type="text" id="student" value={studentName} onChange={(e) => setStudentName(e.target.value)} />

//                 <button type="submit">Search</button>
//             </form>
//         </div>
//     )
// }

// export default SearchStudent