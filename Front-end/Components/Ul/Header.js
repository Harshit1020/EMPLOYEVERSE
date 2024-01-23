"use client"
import React from 'react'
import { FcBriefcase } from "react-icons/fc";
import Link from 'next/link';

const Header = () => {
    return (
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
            <p className="header_elems">Internships</p>
            <div className="header_elems flex items-center">Online Trainings<p className="bg-yellow-500 m-1 rounded-md p-1 text-white">OFFER</p></div>
            <p className="header_elems">Fresher Jobs</p>
            <Link className="bg-transparent me-4 no-underline hover:bg-blue-500 text-blue-700 font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded text-link-none" href="/student">Student</Link>
            <Link className='bg-blue-500 no-underline hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' href="/employe">Employe</Link>
            </div>
        </div>
      );
  
}

export default Header