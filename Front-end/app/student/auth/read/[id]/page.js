"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncapplyinternshipstudent } from '@/store/Actions/studentAction';


const InternshipPage = ({ params }) => {
  const { internships , student} = useSelector((state) => state.studentReducer);
  const [singleinternship, setSingleinternship] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const internship = internships && internships.find((internship) => internship._id === params.id);
    setSingleinternship(internship);
  }, [internships, params.id]);
  const internship = internships && internships.find((internship) => internship._id === params.id);

  const ApplyinternshipHandler = (id)=>{

    dispatch(asyncapplyinternshipstudent(id))
  }
  return (
    <div className="container mt-5 mb-5">
    <h4 className='text-sm'>All Details About Job</h4>
    <div className="bg-content mb-5">
          <div className="bg-white p-4 shadow-md">
            <h2 className="text-xl font-semibold ">{singleinternship && singleinternship.profile}</h2>
            <ul className='list-group'>
            <li>About us</li>
            <li className='list-group-item'>
              <p>We specialize in the design and delivery of training content in the BFSI domain. Our offerings range from ready products to customized training solutions. Organizations deploy TC's ready e-learning courses for internal compliance and domain training. Organizations recruit students who complete their certifications successfully.</p>
            </li>
            <li>About the job</li>
            <li className='list-group-item'>
              <p>Key responsibilities:

1. Develop and execute digital marketing campaigns across various channels, including social media, email, WhatsApp, and search engines
2. Create and optimize content for digital platforms, including websites, blogs, social media, and mailers
3. Conduct keyword research and implement SEO strategies to improve organic search rankings and drive website traffic
4. Manage social media accounts and develop engaging content to build brand awareness, increase followers, and drive user engagement
5. Monitor and analyze website analytics, social media metrics, and campaign performance data to measure the effectiveness of digital marketing efforts
6. Identify and implement strategies to optimize conversion rates and improve online customer acquisition and retention
7. Collaborate with the creative team to develop visually appealing and compelling digital assets, such as graphics, videos, and infographics
8. Stay up-to-date with the latest trends and best practices in digital marketing, including emerging technologies and platforms
9. Collaborate with cross-functional teams, including sales, project management, and customer support, to align digital marketing efforts with overall business goals
10. Stay informed about industry developments, competitor activities, and customer preferences to proactively identify new opportunities and marketing tactics</p>
            </li>
            <p className="text-gray-600"><b>Skills </b></p>
            <li className='list-group-item'>{singleinternship && singleinternship.skills}</li> 
            <p className="text-gray-600"><b>Salary </b></p>
            <p>&#8377; {singleinternship && singleinternship.stipend.amount}</p>
            <p className="text-gray-600"><b>InternshipType  </b></p>
            <li>{singleinternship && singleinternship.internshiptype}</li>
            <p className="text-gray-600"><b>Responsibility  </b></p>
            <li className='list-group-item'>{singleinternship && singleinternship.responsibility}</li> 
        </ul>
            <p className="text-gray-600"><b>Openings  </b>:{singleinternship && singleinternship.openings}</p>
         
            <p className="text-gray-600"><b>Stipend  </b> {singleinternship && singleinternship.stipend.status}</p>
            <p className="text-gray-600"><b>Duration  </b>
            {singleinternship && singleinternship.duration}

            </p>
            <p className="text-gray-600"><b>Perks  </b>
            {singleinternship && singleinternship.perks}

            </p>
            <p className="text-gray-600"><b>Assesments   </b>
             {singleinternship && singleinternship.assesments}
            </p>
            {!internship?.students.includes(student && student._id) ? 
              
              (

                <button  className='bg-blue-900 text-white py-2 px-4 rounded-md m-5'
                onClick={()=> ApplyinternshipHandler(internship?._id)}
                >
                  Apply internship
                </button>

              )
                : (
                  <button className='bg-blue-900 max-w-max text-white py-2 px-4 rounded-md m-5'>Applied</button>
                )
              }
          </div>

    </div>
  </div>     
);
};  

export default InternshipPage;
