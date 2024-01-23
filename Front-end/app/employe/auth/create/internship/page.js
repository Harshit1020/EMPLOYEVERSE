"use client"
import { asynccreateinternshipemploye } from '@/store/Actions/employeAction';
import { useRouter } from 'next/navigation'; // Change from 'next/navigation' to 'next/router'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const CreateInternshipPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [internshipCreate, setInternshipCreate] = useState({
    profile: '',
    skills: '',
    internshiptype: 'In office', // Default value for internshiptype
    openings: 0,
    duration: '',
    responsibility: '',
    stipend: {
      status: 'Fixed',
    },
    salary : 0,
    perks: '',
    assessments: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInternshipCreate({
      ...internshipCreate,
      [name]: value,
    });
  };

  const CreateInternshipHandler = () => {
    dispatch(asynccreateinternshipemploye(internshipCreate));
    router.push('/employe/auth');
  };

  return (
    <div className="container mt-5">
      <form onSubmit={CreateInternshipHandler}>
        <div className="mb-4">
          <label htmlFor="profile" className="block text-sm font-medium text-gray-700">
            Profile
          </label>
          <input
            type="text"
            id="profile"
            name="profile"
            value={internshipCreate.profile}
            onChange={handleInputChange}
            className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
            Skills
          </label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={internshipCreate.skills}
            onChange={handleInputChange}
            className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="internshiptype" className="block text-sm font-medium text-gray-700">
            Internship Type
          </label>
          <select
            id="internshiptype"
            name="internshiptype"
            value={internshipCreate.internshiptype}
            onChange={handleInputChange}
            className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          >
            <option value="In office">In office</option>
            <option value="Remote">Remote</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="openings" className="block text-sm font-medium text-gray-700">
            Openings
          </label>
          <input
            type="number"
            id="openings"
            name="openings"
            value={internshipCreate.openings}
            onChange={handleInputChange}
            className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
            Duration
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={internshipCreate.duration}
            onChange={handleInputChange}
            className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="responsibility" className="block text-sm font-medium text-gray-700">
            Responsibility
          </label>
          <input
            type="text"
            id="responsibility"
            name="responsibility"
            value={internshipCreate.responsibility}
            onChange={handleInputChange}
            className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="stipend-status" className="block text-sm font-medium text-gray-700">
            Stipend Status
          </label>
          <select
            id="stipend-status"
            name="stipend.status"
            value={internshipCreate.stipend.status}
            onChange={handleInputChange}
            className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          >
            <option value="Fixed">Fixed</option>
            <option value="Negotiable">Negotiable</option>
            <option value="Performance Based">Performance Based</option>
            <option value="Unpaid">Unpaid</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="stipend-amount" className="block text-sm font-medium text-gray-700">
            Stipend 
          </label>
          <input
            type="number"
            id="stipend-amount"
            name="salary"
            value={internshipCreate.salary}
            onChange={handleInputChange}
            className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="perks" className="block text-sm font-medium text-gray-700">
            Perks
          </label>
          <input
            type="text"
            id="perks"
            name="perks"
            value={internshipCreate.perks}
            onChange={handleInputChange}
            className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="assessments" className="block text-sm font-medium text-gray-700">
            Assessments
          </label>
          <input
            type="text"
            id="assessments"
            name="assessments"
            value={internshipCreate.assessments}
            onChange={handleInputChange}
            className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div className="mt-4">
          <button
            type="button"
            onClick={CreateInternshipHandler}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Create Internship
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateInternshipPage;

