'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TypingHeadline from './typeHeadline'

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mt-10 md:mt-40 mx-5 md:mx-28">
      <div className="md:mr-4">
        <p className="text-gray-400 text-lg font-mono mb-3 md:text-2xl">WELCOME TO MY WORLD</p>
        <h1 className="text-4xl md:text-6xl text-cadetblue mb-8 ">
          Hello, I'm <span className="text-red-600">M Kamran</span> <br /> a <TypingHeadline />
        </h1>
        <div className="w-full md:w-11/12">
          <p className="text-lg text-gray-600 font-mono mt-8 md:text-2xl">
            I am a passionate full-stack developer and UI/UX designer dedicated to crafting seamless and visually engaging digital experiences. With expertise in front-end design, back-end development, and user-centered design principles, I transform ideas into intuitive, scalable applications.
          </p>
        </div>
        <div className="flex gap-10 mt-10">
          <button className="px-4 py-2 text-white bg-black border-2 border-purple-400 rounded hover:bg-pink-500 hover:text-black transition-colors duration-300">
            <Link href="/about" className="no-underline text-white hover:text-black">About Me</Link>
          </button>
          <button className="px-4 py-2 text-white bg-black border-2 border-purple-400 rounded hover:bg-pink-500 hover:text-black transition-colors duration-300">
            <Link href="/contact" className="no-underline text-white hover:text-black">Contact Me</Link>
          </button>
        </div>
      </div>
      <div className="mt-10 md:mt-0 bg-gray-800 border-2 border-gray-600 rounded-2xl shadow-custom flex justify-center md:justify-start transform transition-transform duration-200 hover:scale-105 md:w-2/3">
        <Image src="/images/photo_t.png" alt="Profile Picture" width={800} height={400} className="object-cover transform transition-transform duration-300 hover:scale-110" />
      </div>
    </div>
  )
}

export default Hero
