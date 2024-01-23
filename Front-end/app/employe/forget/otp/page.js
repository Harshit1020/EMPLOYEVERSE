"use client"
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { asyncemployeotppassword } from '@/store/Actions/employeAction';
import { toast } from 'react-toastify';
import { useState } from 'react';

const EmployeeOTPPasswordPage = () => {
  const { errors } = useSelector((state) => state.employeReducer);
  const dispatch = useDispatch();
  const router = useRouter();
  const [changePasswordForm, setChangePasswordForm] = useState({
    email: '',
    otp: '',
    password: '',
  });

  const SendOtpHandler = async (e) => {
    e.preventDefault();
    await dispatch(asyncemployeotppassword(changePasswordForm));
    router.push('/employe/signin/');
  };

  const handleChangePasswordInputChange = (e) => {
    const { name, value } = e.target;
    setChangePasswordForm({
      ...changePasswordForm,
      [name]: value,
    });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold text-center mb-4">Change Password</h1>
        <form onSubmit={SendOtpHandler}>
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
              value={changePasswordForm.email}
              onChange={handleChangePasswordInputChange}
              className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
              OTP
            </label>
            <input
              type="text"
              id="otp"
              name="otp"
              placeholder="Enter your OTP"
              required
              value={changePasswordForm.otp}
              onChange={handleChangePasswordInputChange}
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
              placeholder="Enter your new password"
              required
              value={changePasswordForm.password}
              onChange={handleChangePasswordInputChange}
              className="mt-1 px-3 py-2 w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 w-full text-white font-normal px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeOTPPasswordPage;
