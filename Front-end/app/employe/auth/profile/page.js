"use client"
"use client";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  asynctemployeupdate,
  asyncemployeorganizationLogo,
  asyncemployeresetpassword,
} from '@/store/Actions/employeAction';
import { toast } from 'react-toastify';

const EmployeeProfilePage = () => {
  const dispatch = useDispatch();
  const { employe } = useSelector((state) => state.employeReducer);

  const [newEmployeeInfo, setNewEmployeeInfo] = useState({
    firstname: employe?.firstname || '',
    lastname: employe?.lastname || '',
    contact: employe?.contact || '',
    organizationname: employe?.organizationname || '',
    email: employe?.email || '',

  });

  const [passwordResetData, setPasswordResetData] = useState({
    password: '',
  });

  const handleUpdateInfo = () => {
    dispatch(asynctemployeupdate(newEmployeeInfo));
  };

  const handlePasswordReset = () => {
    dispatch(asyncemployeresetpassword(passwordResetData));
    if (passwordResetData.password.length >= 6) {
      toast("Password has been changed!");
    }
    setPasswordResetData({ password: '' });
  };

  const handleOrganizationLogoChange = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set('organizationLogo', e.target.organizationLogo.files[0]);
    dispatch(asyncemployeorganizationLogo(formData));
  };

  return (
    <div className="container mt-5 w-72">
      <div className="bg-content max-h-screen p-4 rounded-lg">
        <div className="text-center">
          <img
            className="prof rounded-full mx-auto"
            src={employe?.organizationLogo.url || ''}
            alt=""
          />
          <form onSubmit={handleOrganizationLogoChange} encType="multipart/form-data">
            <input name="organizationLogo" className="form-control mt-3" type="file" />
            <button type="submit" className="btn btn-info btn-sm mt-2">
              Change Avatar
            </button>
          </form>
        </div>
        <div className="profile-info mt-4">
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
              value={newEmployeeInfo.firstname}
              onChange={(e) =>
                setNewEmployeeInfo({
                  ...newEmployeeInfo,
                  firstname: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              value={newEmployeeInfo.lastname}
              onChange={(e) =>
                setNewEmployeeInfo({
                  ...newEmployeeInfo,
                  lastname: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contact" className="form-label">
              Contact
            </label>
            <input
              type="text"
              className="form-control"
              id="contact"
              name="contact"
              value={newEmployeeInfo.contact}
              onChange={(e) =>
                setNewEmployeeInfo({
                  ...newEmployeeInfo,
                  contact: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="organizationname" className="form-label">
              Organization Name
            </label>
            <input
              type="text"
              className="form-control"
              id="organizationname"
              name="organizationname"
              value={newEmployeeInfo.organizationname}
              onChange={(e) =>
                setNewEmployeeInfo({
                  ...newEmployeeInfo,
                  organizationname: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={newEmployeeInfo.email}
              onChange={(e) =>
                setNewEmployeeInfo({
                  ...newEmployeeInfo,
                  email: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="button-section mt-4">
          <button
            className="btn btn-primary btn-sm"
            onClick={handleUpdateInfo}
          >
            Save
          </button>
          <div className="mt-3">
            <label htmlFor="password" className="form-label">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={passwordResetData.password}
              onChange={(e) =>
                setPasswordResetData({
                  ...passwordResetData,
                  password: e.target.value,
                })
              }
            />
          </div>
          <button
            className="btn btn-danger btn-sm mt-2 mb-5 ml-2"
            onClick={handlePasswordReset}
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfilePage;
