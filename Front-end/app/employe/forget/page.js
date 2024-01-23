"use client"
import { useDispatch, useSelector } from 'react-redux';
import { asyncemployeforgetpassword } from '@/store/Actions/employeAction';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const EmployeeForgetPasswordPage = () => {
  const { errors } = useSelector((state) => state.employeReducer);
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState({
    email: '',
  });

  const SendEmailHandler = async (e) => {
    e.preventDefault();
    await dispatch(asyncemployeforgetpassword(email));
    router.push('/employe/forget/otp');
  };

  const handleEmployeeSendMailInputChange = (e) => {
    const { name, value } = e.target;
    setEmail({
      ...email,
      [name]: value,
    });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold text-center mb-4">Forget Password</h1>
        <form onSubmit={SendEmailHandler}>
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
              value={email.email}
              onChange={handleEmployeeSendMailInputChange}
              className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 w-full text-white font-normal px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Send Mail
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForgetPasswordPage;
