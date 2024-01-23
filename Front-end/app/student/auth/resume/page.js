"use client"
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncdeleteeducation , asyncdeletejob , asyncdeleteinternship, asyncdeleteresponsebility, asyncdeletecourse, asyncdeleteproject, asysnaddskills, asyncdeleteskills, asyncdeleteacmp } from '@/store/Actions/studentAction'

const page = () => {

   const {student} = useSelector((state)=> (state.studentReducer))
    const dispatch = useDispatch();
   const DeleteHandler = (id)=>{
        dispatch(asyncdeleteeducation(id))
   }
   const DeleteJobHandler = (id)=>{
    
    dispatch(asyncdeletejob(id))

    }
    const DeleteInternshipHandler = (id)=>{

      dispatch(asyncdeleteinternship(id))

    }
   const DeleteResponsibilityHandler = (id)=>{

    dispatch(asyncdeleteresponsebility(id))

   }

   const DeleteCoursesHandler = (id)=>{

      dispatch(asyncdeletecourse(id));

   }


   const DeleteProjectHandler = (id)=>{

      dispatch(asyncdeleteproject(id))

   }

   const DeleteskillsHandler = (id)=>{

        dispatch(asyncdeleteskills(id));

   }

   const DeleteaccomplishmentsHandler = (id)=>{
        
        dispatch(asyncdeleteacmp(id));

  
}
  return (

    <div className='container res mt-5 p-5'>
        <h2 className='text-2xl	'>{student && student.firstname} {student && student.lastname}</h2>
        <p>{student && student.email}</p>
            <hr className='w-100' />
            <div className="education-cards">

                <h4 className='text-gray-500 text-lg font-semibold'>Education <Link className='no-underline text-blue-500' href="/student/auth/resume/education">Add +</Link></h4>
                {student &&
                    student.resume.education.map((e) => (
                        <div className="education-card bg-white rounded-lg shadow-lg p-4 mb-4" key={e.id}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2 sm:col-span-1">
                                    <div className="text-lg font-semibold">{e.degree} in {e.stream}</div>
                                    <p>{e.college}</p>
                                    <p>{e.startYear} - {e.endYear}</p>
                                    <p>{e.performanceScale}: {e.performance}</p>
                                </div>
                                <div className="col-span-2 sm:col-span-1 text-right">
                                    <div className="mt-2 space-x-2">
                                        <Link className='text-blue-500 hover:text-blue-700' href={`/student/auth/resume/education/${e.id}`}>Edit</Link>
                                        <button onClick={() => DeleteHandler(e.id)} className='text-red-500 hover:text-red-700'>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
           
        <hr />                 
        <h4 className='text-gray-500 text-lg font-semibold'>Job <Link className='no-underline text-blue-500' href="/student/auth/resume/job">Add+</Link></h4>
            {student && student.resume.jobs.map((job) => (
                <div className='bg-white rounded-lg shadow-lg p-4 mb-4' key={job.id}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2 sm:col-span-1">
                            <h5 className='text-lg font-semibold'>{job.organization}</h5>
                            <p className='text-gray-600'>{job.profile}</p>
                            <p className='text-gray-600'>{job.location}</p>
                        </div>
                        <div className="col-span-2 sm:col-span-1 text-right">
                            <p className='text-gray-600'>Start Date: {job.startDate}</p>
                            <p className='text-gray-600'>End Date: {job.endDate}</p>
                            <div className="mt-2 space-x-2">
                                <Link className='text-blue-500 hover:text-blue-700' href={`/student/auth/resume/job/${job.id}`}>Edit</Link>
                                <button onClick={() => DeleteJobHandler(job.id)} className='text-red-500 hover:text-red-700'>Delete</button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='text-gray-700'>{job.description}</p>
                    </div>
                </div>
            ))}
            <hr />   
            

<h4 className='text-gray-500 text-lg font-semibold'>Internships <Link className='no-underline text-bold text-lg' href="/student/auth/resume/internship">Add+</Link></h4>
{student && student.resume.internship.map((internship) => (
    <div className='bg-white rounded-lg shadow-lg p-4 mb-4' key={internship.id}>
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
                <h5 className='text-lg font-semibold'>{internship.organization}</h5>
                <p className='text-gray-600'>{internship.profile}</p>
                <p className='text-gray-600'>{internship.location}</p>
            </div>
            <div className="col-span-2 sm:col-span-1 text-right">
                <p className='text-gray-600'>Start Date: {internship.startDate}</p>
                <p className='text-gray-600'>End Date: {internship.endDate}</p>
                <div className="mt-2 space-x-2">
                    <Link className='text-blue-500 hover:text-blue-700' href={`/student/auth/resume/internship/${internship.id}`}>Edit</Link>
                    <button onClick={() => DeleteInternshipHandler(internship.id)} className='text-red-500 hover:text-red-700'>Delete</button>
                </div>
            </div>
        </div>
        <div className='mt-4'>
            <p className='text-gray-700'>{internship.description}</p>
        </div>
    </div>
))}

<hr />
<h4 className='text-gray-500 text-lg font-semibold'>Responsibilities <Link className='no-underline text-bold text-lg' href="/student/auth/resume/responsibilities">Add+</Link></h4>
{student && student.resume.responsibilities.map((responsibility) => (
    <div className='bg-white rounded-lg shadow-lg p-4 flex justify-between' key={responsibility.id}>
        <div className="grid grid-cols-2 gap-4">
        <div className='mt-4'>
            <p className='text-gray-700'>{responsibility.resp}</p>
        </div>
    </div>
            <div className="col-span-2 sm:col-span-1">
                <div className="mt-2 space-x-2">
                    <Link className='text-blue-500 hover:text-blue-700' href={`/student/auth/resume/responsibilities/${responsibility.id}`}>Edit</Link>
                    <button onClick={() => DeleteResponsibilityHandler(responsibility.id)} className='text-red-500 hover:text-red-700'>Delete</button>
                </div>
            </div>
        </div>
     
))}
<hr />

  
<h4 className='text-gray-500 text-lg font-semibold'>Courses <Link className='no-underline text-bold text-lg' href="/student/auth/resume/courses">Add+</Link></h4>
{student && student.resume.courses.map((course) => (
    <div className='bg-white rounded-lg shadow-lg p-4 mb-4' key={course.id}>
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
                <h5 className='text-lg font-semibold'>{course.Name}</h5>
                <p className='text-gray-600'>{course.Organization}</p>
                <p className='text-gray-600'>{course.Location}</p>
            </div>
            <div className="col-span-2 sm:col-span-1 text-right">
            <p className='text-gray-600'>{course.Online}</p>
                <p className='text-gray-600'>Start Date: {course.StartDate}</p>
                <p className='text-gray-600'>End Date: {course.EndDate}</p>
                <div className="mt-2 space-x-2">
                    <Link className='text-blue-500 hover:text-blue-700' href={`/student/auth/resume/courses/${course.id}`}>Edit</Link>
                    <button onClick={() => DeleteCoursesHandler(course.id)} className='text-red-500 hover:text-red-700'>Delete</button>
                </div>
            </div>
        </div>
        <div className='mt-4'>
            <p className='text-gray-700'>{course.Description}</p>
        </div>
    </div>
))}
   
   <hr />

<h4 className='text-gray-500 text-lg font-semibold'>
    Projects <Link className='no-underline text-bold text-lg' href="/student/auth/resume/project">Add+</Link>
</h4>

{student && student.resume.project.map((p) => (
    <div className='bg-white rounded-lg shadow-lg p-4 mb-4' key={p.id}>
        <div className='grid grid-cols-2 gap-4'>
            <div className='col-span-2 sm:col-span-1'>
                <h5 className='text-lg font-semibold'>{p.title}</h5>
                <p className='text-gray-600'>{p.startMonth} - {p.endMonth}</p>
            </div>
            <div className='col-span-2 sm:col-span-1 text-right'>
                <div className='mt-2 space-x-2'>
                    <Link
                        className='text-blue-500 hover:text-blue-700'
                        href={`/student/auth/resume/project/${p.id}`}
                    >
                        Edit
                    </Link>
                    <button
                        onClick={() => DeleteProjectHandler(p.id)}
                        className='text-red-500 hover:text-red-700'
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
        <div className='mt-4'>
            <p className='text-gray-700'>{p.description}</p>
        </div>
    </div>
))}

    <hr />

<h4 className='text-gray-500 text-lg font-semibold'>Skills <Link className='no-underline text-bold text-lg' href="/student/auth/resume/skills">Add+</Link></h4>
{student && student.resume.skills.map((skill) => (
    <div className='bg-white-200 rounded-lg shadow-lg p-4 mb-4' key={skill.id}>
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
                <p className='text-gray-600'>{skill.prog}</p>
            </div>
            <div className="col-span-2 sm:col-span-1 text-right">
                <div className="mt-2 space-x-2">
                    <Link className='text-blue-500 hover:text-blue-700' href={`/student/auth/resume/skills/${skill.id}`}>Edit</Link>
                    <button onClick={() => DeleteskillsHandler(skill.id)} className='text-red-500 hover:text-red-700'>Delete</button>
                </div>
            </div>
        </div>
    </div>
))}

<hr />

<h4 className='text-gray-500 text-lg font-semibold'>Accomplishments<Link className='no-underline text-bold text-lg' href="/student/auth/resume/accomplishments">Add+</Link></h4>
{student && student.resume.accomplishments.map((p) => (
    <div className='bg-white rounded-lg shadow-lg p-4 mb-4' key={p.id}>
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
                <h5 className='text-lg font-semibold'>{p.name}</h5>
            </div>
            <div className="col-span-2 sm:col-span-1 text-right">
                <div className="mt-2 space-x-2">
                    <Link className='text-blue-500 hover:text-blue-700' href={`/student/auth/resume/accomplishments/${p.id}`}>Edit</Link>
                    <button onClick={() => DeleteaccomplishmentsHandler(p.id)} className='text-red-500 hover:text-red-700'>Delete</button>
                </div>
            </div>
        </div>
        <div className='mt-4'>
            <p className='text-gray-700'>{p.description}</p>
        </div>
    </div>
))}

    </div>
  )
}

export default page