"use client"
import { useEffect, useState } from "react"

export default function update({ params }) {

    let user_id = params.id;
    console.log(user_id);

    const [first_name, setfirst_name] = useState("");
    const [last_name, setlast_name] = useState("");
    const [age, setage] = useState("");
    const [mail, setmail] = useState("");


    useEffect(() => {
        getuserdetails()
    }, [])

    async function getuserdetails() {

        let data = await fetch("http://localhost:3000/api/users/" + user_id);
        data = await data.json();;
        setfirst_name(data.result.first_name);
    }

    async function update() {

        let data = await fetch("http://localhost:3000/api/users/" + user_id, {
            method:"PUT",
            body: JSON.stringify({first_name,last_name,age,mail})
        });
        data = await data.json()
        console.log(data);

        if(data.success)
        {
            alert("SuccessFull Update Data");
        }
        else
        {
            alert("Plz Try Again");
        }
    };


    return (
        <div className="container" >
            <br></br>
            <h1 className="text-center" >Update Student Forms</h1>
            <br></br>
            <input type="text" placeholder="First Name" className="form-control" value={first_name} onChange={(e) => setfirst_name(e.target.value)} required />
            <br></br>
            <input type="text" placeholder="Last Name" className="form-control" value={last_name} onChange={(e) => setlast_name(e.target.value)} required />
            <br></br>
            <input type="number" placeholder="Age" className="form-control" value={age} onChange={(e) => setage(e.target.value)} required />
            <br></br>
            <input type="mail" placeholder="Gmail" className="form-control" value={mail} onChange={(e) => setmail(e.target.value)}
                required />
            <br></br>
            <input type="submit" value="Submit" className="btn btn-primary  btn-block" onClick={update} />
        </div>
    )
}

