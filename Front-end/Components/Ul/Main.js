"use client"
import React from 'react'
import css from "../Ul/Main.module.css"
import Link from 'next/link'

const Main = () => {
  return (
    <div className='container mt-5 flex justify-center flex-col items-center'>

        <h3 className='text-3xl italic font-extrabold'>Make your dream career a reality</h3>
        <div className={css.box}>
            <div className={css.boxes}>
                <img src="https://d3atms9ic4lahi.cloudfront.net/banner-images/home_new/int_opps-student.png.webp" alt="" />
            </div>
            <div className={css.boxes}>
                <img src="https://d3atms9ic4lahi.cloudfront.net/banner-images/home_new/exp_hiring-student.png.webp" alt="" />
            </div>
            <div className={css.boxes}>
                <img src="https://d3atms9ic4lahi.cloudfront.net/banner-images/home_new/pgc_banner-student.png.webp" alt="" />
            </div>
        </div>


       <Link className='no-underline font-bold' href = "/student">Explore More</Link>

    </div>
  )
}

export default Main