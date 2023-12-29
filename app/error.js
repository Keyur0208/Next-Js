"use client"

import { useEffect } from "react"

export default function error({error,reset}){

    useEffect(()=>{
        console.error("Error");
    },[error]);

    return(
        <>
          <h1>Hello</h1>
          <button onClick={()=>reset()}>Try Again</button>
        </>
    )
}

