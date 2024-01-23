"use client"
import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
const EmployeAuth = ({ children }) => {

  const dispatch = useDispatch();
  const router = useRouter();
  const {isAuthenticated} = useSelector((state) => (state.employeReducer))

  useEffect(()=>{
    if(!isAuthenticated) router.push("/employe/")
},[isAuthenticated])

  return children;
}

export default EmployeAuth