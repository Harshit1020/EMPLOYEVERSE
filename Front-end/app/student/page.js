"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import css from "./page.module.css"


// export const metadata = {
//     title: 'Student | Home Page',

//   }
const page = () => {
  const router = useRouter();

  const {isAuthenticated} = useSelector((state) => (state.studentReducer))
  console.log(isAuthenticated)

  
  useEffect(()=>{
    if(isAuthenticated) router.push("/student/auth")
},[isAuthenticated])
  return (
    
    <div className={css.box}>
    <h1 className={css.txt1}>Welcome.</h1>
    <h5 className={css.txt2}>Internships & Jobs on EmployeVerse</h5>
    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
</div>
  )
}

export default page