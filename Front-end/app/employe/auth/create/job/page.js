"use client"
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { asynccreatejobemploye } from '@/store/Actions/employeAction';
import { useRouter } from 'next/navigation';

const CreateJobPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  // Define your initial form state
  const [jobCreate, setJobCreate] = useState({
    title: '',
    skills: '',
    jobtype: '',
    openings: 0,
    description: '',
    preference: '',
    salary: 0,
    perks: '',
    assesments: '',
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asynccreatejobemploye(jobCreate));
    router.push('/employe/auth');
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobCreate({
      ...jobCreate,
      [name]: value,
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-2xl font-semibold mb-4">Create Job</h2>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={jobCreate.title}
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
            value={jobCreate.skills}
            onChange={handleInputChange}
            className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
  <label htmlFor="jobtype" className="block text-sm font-medium text-gray-700">
    Job Type
  </label>
  <select
    id="jobtype"
    name="jobtype"
    value={jobCreate.jobtype}
    onChange={handleInputChange}
    className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    required
  >
    <option value="" disabled>Select Job Type</option>
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
            value={jobCreate.openings}
            onChange={handleInputChange}
            className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={jobCreate.description}
            onChange={handleInputChange}
            rows="4"
            className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="preference" className="block text-sm font-medium text-gray-700">
            Preference
          </label>
          <textarea
            id="preference"
            name="preference"
            value={jobCreate.preference}
            onChange={handleInputChange}
            rows="4"
            className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
            Salary
          </label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={jobCreate.salary}
            onChange={handleInputChange}
            className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="perks" className="block text-sm font-medium text-gray-700">
            Perks
          </label>
          <textarea
            id="perks"
            name="perks"
            value={jobCreate.perks}
            onChange={handleInputChange}
            rows="4"
            className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="assesments" className="block text-sm font-medium text-gray-700">
            assesments
          </label>
          <textarea
            id="assesments"
            name="assesments"
            value={jobCreate.assesments}
            onChange={handleInputChange}
            rows="4"
            className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Create Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateJobPage;
