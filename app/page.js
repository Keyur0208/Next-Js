"use client"
import React from "react"
import { useRouter } from "next/navigation"

export default function Home() {

  const router = useRouter();

  const navigation = (name) => {
    return (
      router.push(name)
    )
  }

  return (
    <main>
      <div className="container" >
        <div className='text-center'>
          <h1>Next_Js Task </h1>
        </div>
        <br></br>
        <div className="row" >
          <div className="col-12 col-6 col-3" >
            <button onClick={() => navigation("/datafetch")} className="p-2" >1.Data Fetch</button>
          </div>
        </div>
      </div>
    </main>
  )
}
