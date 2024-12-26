import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'
// import { FaGithub } from 'react-icons/fa'
import Skills from '../component/skillsBar'

const About = () => {
  return (
    <div className="flex flex-col items-center mt-24 mb-10 px-4">
      <h1 className="text-5xl text-cadetblue mb-5 text-center">About Me</h1>
      <div className="flex justify-center md:mb-24 mt-12 mb-12">
        <Image src="/images/profile.png" alt='Profile Picture' width={300} height={300} className="rounded-full" />
      </div>
      <h2 className="text-4xl text-cadetblue md:mb-10 text-center mb-4">UI/UX Designer & Full Stack Developer</h2>
      <div className='md:w-3/4'>
      <p className="text-lg text-teal-200 text-justify indent-10 mx-10 my-2">
        A skilled UI/UX designer & full-stack developer brings a powerful combination of creativity and technical expertise to create seamless, user-centered digital experiences. The designer focuses on crafting intuitive interfaces that are visually appealing and easy to navigate, while the developer ensures the app’s functionality, performance, and scalability from front-end to back-end. This unique skill set allows them to bridge the gap between design and development, ensuring both aesthetic quality and robust, efficient code. Together, they create products that are not only beautiful but also functional, responsive, and user-friendly.
      </p></div>
      <div className="flex gap-8 justify-center md:mb-20 md:mt-16 mt-6 mb-10">
        <button className="w-24 h-12 bg-gray-800 border-2 border-gray-600 rounded-lg shadow-md flex justify-center items-center transition-transform duration-200 hover:translate-y-1 hover:shadow-lg">
          <FaLinkedin className="text-xl" />
        </button>
        <button className="w-24 h-12 bg-gray-800 border-2 border-gray-600 rounded-lg shadow-md flex justify-center items-center transition-transform duration-200 hover:translate-y-1 hover:shadow-lg">
          <FaFacebookF className="text-xl" />
        </button>
        <button className="w-24 h-12 bg-gray-800 border-2 border-gray-600 rounded-lg shadow-md flex justify-center items-center transition-transform duration-200 hover:translate-y-1 hover:shadow-lg">
          <FaInstagram className="text-xl" />
        </button>
      </div>
      <Skills />
    </div>
  )
}

export default About
