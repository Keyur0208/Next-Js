"use client"
export default function page(props) {

    const user_id = props.id;
    console.log(user_id);


    const delete_data = async() =>{
        let data = await fetch ("http://localhost:3000/api/users/"+user_id,{
            method:"DELETE"
        });
        data = await data.json();

        if(data.success)
        {
            alert("SucessFull Data Delete");
        }
        else
        {
            alert("UnSucessFull Data Delete");
        }
    }

    return (
        <>
            <button className="btn btn-danger" onClick={delete_data} > Delete</button>
        </>
    )
}

