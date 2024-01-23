"use client"
import React from 'react'
import { FcBriefcase } from "react-icons/fc";
import { useEffect } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux"
import { asynccurrentstudent, asynctstudentsignout } from "@/store/Actions/studentAction"
import { useRouter } from 'next/navigation'
import{ removerorr } from "@/store/Reducers/studentReducer";
import { toast } from 'react-toastify'
const StudentLayout = ({ children }) => {
  const dispatch = useDispatch()
  const router = useRouter();
  const {erorrs} = useSelector((state) => (state.studentReducer))
  const {isAuthenticated} = useSelector((state) => (state.studentReducer))
  console.log(isAuthenticated)
  
  useEffect(()=>{
    dispatch(asynccurrentstudent());
    if(isAuthenticated) router.push("/student/auth")
},[isAuthenticated])


const SignoutHandler = ()=>{
  dispatch(asynctstudentsignout());

}

if(erorrs){

  erorrs.map((err)=>{

    if(err?.includes("Please log in to access the resources")){

      dispatch(removerorr());
    }
    toast.error(err);
    dispatch(removerorr());

  })
}
  return (  
    <>
    <div className="flex shadow-lg mb-2">
          {/* Left */}
          <div className="flex flex-grow items-center m-4 ml-20">
              <div className="relative">
            <FcBriefcase className="absolute -top-7 left-20 text-xs w-5 h-5 rounded-full flex items-center " />
              </div>
            <div className="flex items-center mr-40">
              <p className="text-blue-400 font-semibold">Employment</p>
              <p>Verse</p>
            </div>
          </div>
    
            {/* Right */}
      <div className="flex items-center mr-32">
      <Link className="no-underline header_elems" href={ isAuthenticated ? "/student/auth" : "/student"}>Home</Link>
            <div className="header_elems flex items-center">Online Trainings<p className="bg-yellow-500 m-1 rounded-md p-1 text-white">OFFER</p></div>
            <p className="header_elems">Fresher Jobs</p>    
       {isAuthenticated ? <>
      <Link className='me-4 text-black no-underline'  href="/student/auth/profile">Profile</Link>
      <Link className='me-4 text-black no-underline'  href="/student/auth/resume">Resume</Link>
      <Link className='me-4 text-black no-underline'  href="/student/auth/applied">My Application</Link>
      <Link className='bg-blue-500 no-underline hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={SignoutHandler} href="">Signout</Link>
    </> :
    <>
    <Link className='me-4 text-black no-underline'  href="/">Main Page</Link>
     <Link className='bg-transparent me-4 no-underline hover:bg-blue-500 text-blue-700 font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded text-link-none' href="/student/signin">Signin</Link>
      <Link className='bg-blue-500 no-underline hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' href="/student/signup">Signup</Link>
    </>
    }
    </div>
    </div>
    {children}
    </>
  )
}

export default StudentLayout