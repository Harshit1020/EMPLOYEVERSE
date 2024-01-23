"use client"
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { asynctemployesignin } from '@/store/Actions/employeAction';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Page = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  // useState for sign in
  const [employeLoginForm, setEmployeLoginForm] = useState({
    email: '',
    password: '',
  });

  const { isAuthenticated } = useSelector((state) => state.employeReducer);

  useEffect(() => {
    if (isAuthenticated) router.push('/employe/auth');
  }, [isAuthenticated]);

  const SigninHandler = (e) => {
    e.preventDefault();
    dispatch(asynctemployesignin(employeLoginForm));
    if (isAuthenticated) {
      router.push('/employe/auth');
    }
  };

  const handleEmployeInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeLoginForm({
      ...employeLoginForm,
      [name]: value,
    });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold text-center mb-4">Employee Login</h1>
        <form onSubmit={SigninHandler}>
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
              value={employeLoginForm.email}
              onChange={handleEmployeInputChange}
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
              value={employeLoginForm.password}
              onChange={handleEmployeInputChange}
              className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 w-full text-white font-normal px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
          <div className="flex flex-col gap-4 py-2">
            <Link href="/employe/forget" className="text-blue-400">
              Forgot password?
            </Link>
            <p className="text-black">
              Don't have an account?{' '}
              <Link className="text-blue-500" href="/employe/signup">
                Create one
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
