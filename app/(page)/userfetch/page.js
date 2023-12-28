// import Link from "next/link";
// import Delete from '../../delete_data'

// export async function user_list() {
//     let user_data = await fetch("http://localhost:3000/api/users");
//     user_data = await user_data.json();
//     return user_data;
// }


// export default async function user() {

//     const users = await user_list();
//     console.log(users);

//     return (
//         <>
//             <h1 className="text-center">User List</h1>
//             <br></br>
//             <table className="table text-center  table-dark">
//                 <thead>
//                     <tr>
//                         <th scope="col">USER DATA</th>
//                         <th scope="col">UPDATE</th>
//                         <th scope="col">DELETE</th>
//                     </tr>
//                 </thead>
//                 {
//                     users.map((item) => {

//                         return (
//                             <>
//                                 <tbody>
//                                     <tr>
//                                         <td><Link href={`userfetch/${item.id}`} className="btn btn-primary" > {item.first_name}</Link> </td>
//                                         <td><Link href={`userfetch/${item.id}/update`} className="btn btn-success" > Edit</Link></td>
//                                         <td><Delete id={item.id} /></td>
//                                     </tr>
//                                 </tbody>
//                             </>
//                         )
//                     })
//                 }
//             </table>
//         </>
//     )
// }



import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page

