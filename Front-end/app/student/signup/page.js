"use client"
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { asynctstudentsignup } from '@/store/Actions/studentAction';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const SignupPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  // useState for sign up
  const [studentSignupForm, setStudentSignupForm] = useState({
    firstname: '',
    lastname: '',
    contact: '',
    city: '',
    gender: 'Male', //the default gender value
    email: '',
    password: '',
  });

  
  const { isAuthenticated } = useSelector((state) => state.studentReducer);

  useEffect(() => {
    if (isAuthenticated) router.push('/student/auth');
  }, [isAuthenticated]);

  const SignupHandler = (e) => {
    e.preventDefault();
    dispatch(asynctstudentsignup(studentSignupForm));
    if (isAuthenticated) {
      router.push('/student/auth');
    }
  };

  const handleStudentInputChange = (e) => {
    const { name, value } = e.target;
    setStudentSignupForm({
      ...studentSignupForm,
      [name]: value,
    });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold text-center mb-4">Student Signup</h1>
        <form onSubmit={SignupHandler}>
          <div className="mb-4">
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Enter your first name"
              required
              value={studentSignupForm.firstname}
              onChange={handleStudentInputChange}
              className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Enter your last name"
              required
              value={studentSignupForm.lastname}
              onChange={handleStudentInputChange}
              className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
              Contact
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              placeholder="Enter your contact"
              required
              value={studentSignupForm.contact}
              onChange={handleStudentInputChange}
              className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Enter your city"
              required
              value={studentSignupForm.city}
              onChange={handleStudentInputChange}
              className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              required
              value={studentSignupForm.gender}
              onChange={handleStudentInputChange}
              className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={studentSignupForm.email}
              onChange={handleStudentInputChange}
              className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              value={studentSignupForm.password}
              onChange={handleStudentInputChange}
              className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 w-full text-white font-normal px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Signup
          </button>
          <p className="text-black">
              Already have an account?{' '}
              <Link className="text-blue-500" href="/student/signin">
                Login 
              </Link>
            </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
