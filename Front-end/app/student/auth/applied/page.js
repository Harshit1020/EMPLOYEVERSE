"use client"
import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const Page = () => {
  const { student } = useSelector((state) => state.studentReducer);

  return (
    <div className="container mt-5">
      <h4 className='text-gray-600'>All Applied Jobs For {student && student.firstname}</h4>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {student &&
          student.jobs.map((j) => (
            <div className="bg-white p-4 rounded-md shadow-md" key={j._id}>
              <h2 className="text-xl font-semibold">Title {j.title}</h2>
              <p className="text-gray-600">Skills : {j.skills}</p>
              <p className="text-gray-600">Openings: {j.openings}</p>
              <p className="text-gray-600">Job Type: {j.jobtype}</p>
              <p className="text-gray-600">Description: {j.description}</p>
              <Link className='font-bold fs-sm no-underline me-4' href={`/student/auth/readjob/${j._id}`}>View Details{">"}</Link>
            </div>
          ))}
      </div>
  
      <h4 className='text-gray-600 mt-4'>All Applied Internships For {student && student.firstname}</h4>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {student &&
          student.internships.map((i) => (
            <div className="bg-white p-4 rounded-md shadow-md" key={i._id}>
              <h2 className="text-xl font-semibold">Title : {i.profile}</h2>
              <p className="text-gray-600">Skills : {i.skills}</p>
              <p className="text-gray-600">Openings: {i.openings}</p>
              <p className="text-gray-600">Duration: {i.duration}</p>
              <p className="text-gray-600">Stipend: {i.stipend.amount}</p>
              <Link className='font-bold fs-sm no-underline me-4' href={`/student/auth/read/${i._id}`}>View Details{">"}</Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Page;
