"use client"
import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const { employe } = useSelector((state) => state.employeReducer);

  return (
    <div
      className='h-screen bg-cover bg-center flex flex-col mt-5 items-center'
    >
      <div className='text-4xl font-extrabold mb-4 custom-text-color {
'>Welcome to Your Dashboard</div>
      <div className='text-xl mb-6'>Manage your jobs and internships effortlessly</div>
      <div className='flex space-x-4'>
        <Link className='no-underline' href='/employe/auth/create/job'>
          <p className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out'>
            Create Job
          </p>
        </Link>
        <Link className='no-underline' href='/employe/auth/create/internship'>
          <p className='bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out'>
            Create Internship
          </p>
        </Link>
        <hr />
      </div>
   
    </div>
  );
};

export default HomePage;
