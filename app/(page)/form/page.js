// "use client"
// import { useState } from "react"

// export default function form() {

//     const [fisrt_name, setfirst_name] = useState("");
//     const [last_name, setlast_name] = useState("");
//     const [age, setage] = useState("");
//     const [mail, setmail] = useState("");

//     async function done() {

//         let data = await fetch ("http://localhost:3000/api/users",{
//             method:"POST",
//             body:JSON.stringify({fisrt_name,last_name,age,mail})
//         });
//         data = await data.json();
//         console.log(data);

//         if(data.success)
//         {
//             alert("SuccessFull Data");
//         }
//         else
//         {
//             alert("Plz Fill Up Data");
//         }
//     }

//     return (
//         <div className="container" >
//             <br></br>
//             <h1 className="text-center" >Students Forms</h1>
//             <br></br>
//             <input type="text" placeholder="First Name" className="form-control" value={fisrt_name} onChange={(e) => setfirst_name(e.target.value)} required />
//             <br></br>
//             <input type="text" placeholder="Last Name" className="form-control" value={last_name} onChange={(e) => setlast_name(e.target.value)}  required/>
//             <br></br>
//             <input type="number" placeholder="Age" className="form-control" value={age} onChange={(e) => setage(e.target.value)} required/>
//             <br></br>
//             <input type="mail" placeholder="Gmail" className="form-control" value={mail} onChange={(e) => setmail(e.target.value)}
//             required />
//             <br></br>
//             <input type="submit" value="Submit" className="btn btn-primary  btn-block" onClick={done} />
//         </div>
//     )
// }

import React from 'react'

const page = () => {
  return (
    <div>Form Page</div>
  )
}

export default page
