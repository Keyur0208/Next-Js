// import React from 'react'

// export async function user_list() {
//   let user_data = await fetch("http://localhost:3000/api/users");
//   user_data = await user_data.json();
//   return user_data;
// }

// export default async function user_id(props) {

//   const  getdata = user_list();
//   const users =  await getdata;
//   const currentId = props.params.id;
//   const userdata = users[currentId-1];
//   console.log(userdata);

//   return (
//     <>
//       <h1>User List</h1>
//       <h3>id = {userdata.id}</h3>
//       <h3>First Name ={userdata.first_name}</h3>
//       <h3>Last  Name ={userdata.last_name}</h3>
//       <h3>Age ={userdata.age}</h3>
//       <h3>City ={userdata.city}</h3>
//     </>
//   )
// }


import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page


