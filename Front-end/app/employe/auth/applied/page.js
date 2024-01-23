"use client"
import React from 'react'
import Link from 'next/link';
import { useSelector } from 'react-redux'

const Page = () => {
  const { employe } = useSelector((state) => state.employeReducer)
  return (
    <div className='container mt-5'>
    <h4 className='text-2xl font-semibold mb-4'>
      All Created Jobs By {employe && employe.firstname}
    </h4>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {employe &&
        employe.jobs.map((job) => (
          <div className='bg-white rounded-lg p-4 shadow-md' key={job._id}>
            <h5 className='text-xl font-semibold mb-2'>Title: {job.title}</h5>
            <p className='mb-2'>Skills: {job.skills}</p>
            <p className='mb-2'>Job Type: {job.jobtype}</p>
            <p className='mb-2'>Openings: {job.openings}</p>
            <p className='mb-2'>Preference: {job.preference}</p>
            <p className='mb-2'>Description: {job.description}</p>
            <p className='mb-2'>Salary: {job.salary}</p>
            <p className='mb-2'>Perks: {job.perks}</p>
            <p className='mb-2'>Assessments: {job.assesments}</p>
            <Link className='fs-sm no-underline me-4' href={`/employe/auth/read/${job._id}`}>View Details{">"}</Link>
          </div>
        ))}
    </div>
    <hr className='my-8' />
    <h4 className='text-2xl font-semibold mb-4'>
      All Created Internships By {employe && employe.firstname}
    </h4>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {employe &&
        employe.internships.map((internship) => (
          <div className='bg-white rounded-lg p-4 shadow-md' key={internship._id}>
            <h5 className='text-xl font-semibold mb-2'>Profile: {internship.profile}</h5>
            <p className='mb-2'>Skills: {internship.skills}</p>
            <p className='mb-2'>Internship Type: {internship.internshiptype}</p>
            <p className='mb-2'>Openings: {internship.openings}</p>
            {/* <p className='mb-2'>From: {internship.from}</p>
            <p className='mb-2'>To: {internship.to}</p> */}
            <p className='mb-2'>Duration: {internship.duration}</p>
            <p className='mb-2'>Responsibility: {internship.responsibility}</p>
            <p className='mb-2'>Stipend-Status: {internship.stipend.status}</p>
            <p className='mb-2'>Stipend Amount: {internship.salary}</p>
            <p className='mb-2'>Perks: {internship.perks}</p>
            <p className='mb-2'>Assessments: {internship.assesments}</p>
            <Link className='fs-sm no-underline me-4' href={`/employe/auth/readintern/${internship._id}`}>View Details{">"}</Link>
          </div>
        ))}
    </div>
  </div>
);
};

export default Page
