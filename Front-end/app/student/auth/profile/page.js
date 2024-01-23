"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  asynctstudentupdate,
  asyncstudentavatar,
  asyncstudentresetpassword,
} from '@/store/Actions/studentAction';
import { toast } from 'react-toastify';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { student } = useSelector((state) => state.studentReducer);

  const [newStudentInfo, setNewStudentInfo] = useState({
    firstname: student?.firstname || '',
    lastname: student?.lastname || '',
    contact: student?.contact || '',
    city: student?.city || '',
    gender: student?.gender || '',
    email: student?.email || '',
  });

  const [passwordResetData, setPasswordResetData] = useState({
    password: '',
  });

  const handleUpdateInfo = () => {
    dispatch(asynctstudentupdate(newStudentInfo));
  };

  const handlePasswordReset = () => {
    dispatch(asyncstudentresetpassword(passwordResetData));
    if(passwordResetData.password.length >= 6){
      
      toast("password has been changed !")
      
    }
   
    setPasswordResetData({password :''})
  };

  const handleAvatarChange = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set('avatar', e.target.avatar.files[0]);
    dispatch(asyncstudentavatar(formData));
  };

  return (
    <div className="container mt-5 w-72">
      <div className="bg-content max-h-screen p-4 rounded-lg">
        <div className="text-center">
          <img
            className="prof rounded-full mx-auto"
            src={student?.avatar.url || ''}
            alt=""
          />
          <form onSubmit={handleAvatarChange} encType="multipart/form-data">
            <input name="avatar" className="form-control mt-3" type="file" />
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
              value={newStudentInfo.firstname}
              onChange={(e) =>
                setNewStudentInfo({
                  ...newStudentInfo,
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
              value={newStudentInfo.lastname}
              onChange={(e) =>
                setNewStudentInfo({
                  ...newStudentInfo,
                  lastname: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="contact-info mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="contact" className="form-label">
                  Contact
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contact"
                  name="contact"
                  value={newStudentInfo.contact}
                  onChange={(e) =>
                    setNewStudentInfo({
                      ...newStudentInfo,
                      contact: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  value={newStudentInfo.city}
                  onChange={(e) =>
                    setNewStudentInfo({
                      ...newStudentInfo,
                      city: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="gender-info mt-4">
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              className="form-select"
              id="gender"
              name="gender"
              value={newStudentInfo.gender}
              onChange={(e) =>
                setNewStudentInfo({
                  ...newStudentInfo,
                  gender: e.target.value,
                })
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </div>
        <div className="email-info mt-4">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={newStudentInfo.email}
              onChange={(e) =>
                setNewStudentInfo({
                  ...newStudentInfo,
                  email: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="button-section mt-4">
          <button className="btn btn-primary btn-sm" onClick={handleUpdateInfo}>
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

export default ProfilePage;
