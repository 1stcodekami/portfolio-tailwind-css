import React from 'react'
import Image from 'next/image'
import HeartCounter from '../component/heartCounter'

const Project = () => {
  return (
    <div className="flex flex-col items-center mt-24 mb-24 px-4 ">
      <h1 className="text-5xl text-cyan-600 mb-5 text-center">My Projects</h1>
      <div className="w-full mb-12">
        <h2 className="text-4xl text-cyan-600 text-left md:text-center mb-4">There are some of my Projects</h2>
        <p className="text-lg text-cyan-200 text-left md:text-center mx-auto mb-4">
          My applications are user-friendly, intuitive, and provide a seamless experience with fast load times and minimal bugs. They offer clear functionality, are reliable, and solve specific problems or meet needs effectively. Personalization, security, and frequent updates to enhance features are also important. The apps have appealing designs, smooth navigation, and provide value to users, keeping them engaged and satisfied.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-16 md:gap-24">
        <div className="bg-gray-800 border-2 border-gray-600 rounded-lg p-4 w-full md:w-1/2 lg:w-1/3 shadow-custom transform transition-transform duration-200 hover:scale-105">
          <div className="flex justify-center mb-4 overflow-hidden rounded-lg">
            <Image src="/images/Back_2.jpg" alt="Number Game" width={200} height={200} className="object-cover transform transition-transform duration-300 hover:scale-110 hover:rounded-3xl rounded-2xl" />
          </div>
          <h3 className="text-2xl text-red-600 mb-2 text-center">Number Game</h3>
          <HeartCounter initialValue={250} />
          <p className="text-cyan-200 mt-2 text-center">
            Number game app is a fun and educational tool that challenges players with puzzles and tasks involving numbers, enhancing their math skills, logical thinking, and problem-solving abilities.
          </p>
        </div>

        <div className="bg-gray-800 border-2 border-gray-600 rounded-lg p-4 w-full md:w-1/2 lg:w-1/3 shadow-custom transform transition-transform duration-200 hover:scale-105 ">
          <div className="flex justify-center mb-4 overflow-hidden rounded-lg">
            <Image src="/images/Health_900.png" alt="Running" width={200} height={200} className="object-cover transform transition-transform duration-300 hover:scale-110 hover:rounded-3xl rounded-2xl" />
          </div>
          <h3 className="text-2xl text-red-600 mb-2 text-center">Running</h3>
          <HeartCounter initialValue={224} />
          <p className="text-cyan-200 mt-2 text-center">
            A good running app is designed to track and enhance your running experience by providing metrics, motivation, and tools to improve your performance.
          </p>
        </div>

        <div className="bg-gray-800 border-2 border-gray-600 rounded-lg p-4 w-full md:w-1/2 lg:w-1/3 shadow-custom transform transition-transform duration-200 hover:scale-105">
          <div className="flex justify-center mb-4 overflow-hidden rounded-lg">
            <Image src="/images/food_2.png" alt="Food Order" width={200} height={200} className="object-cover transform transition-transform duration-300 hover:scale-110 hover:rounded-3xl rounded-2xl" />
          </div>
          <h3 className="text-2xl text-red-600 mb-2 text-center">Food Order</h3>
          <HeartCounter initialValue={304} />
          <p className="text-cyan-200 mt-2 text-center">
            Food ordering app is a convenient platform that allows users to browse menus, place orders, and enjoy meals from their favorite restaurants or delivery services.
          </p>
        </div>

        <div className="bg-gray-800 border-2 border-gray-600 rounded-lg p-4 w-full md:w-1/2 lg:w-1/3 shadow-custom transform transition-transform duration-200 hover:scale-105">
          <div className="flex justify-center mb-4 overflow-hidden rounded-lg">
            <Image src="/images/Eco_900.png" alt="E-commerce" width={200} height={200} className="object-cover transform transition-transform duration-300 hover:scale-110 hover:rounded-3xl rounded-2xl" />
          </div>
          <h3 className="text-2xl text-red-600 mb-2 text-center">E-commerce</h3>
          <HeartCounter initialValue={281} />
          <p className="text-cyan-200 mt-2 text-center">
            This application allows users to browse, shop, and manage purchases from online stores, providing a secure and enjoyable shopping experience.
          </p>
        </div>

        <div className="bg-gray-800 border-2 border-gray-600 rounded-lg p-4 w-full md:w-1/2 lg:w-1/3 shadow-custom transform transition-transform duration-200 hover:scale-105">
          <div className="flex justify-center mb-4 overflow-hidden rounded-lg">
            <Image src="/images/fit_900.jpg" alt="Fitness" width={200} height={200} className="object-cover transform transition-transform duration-300 hover:scale-110 hover:rounded-3xl rounded-2xl" />
          </div>
          <h3 className="text-2xl text-red-600 mb-2 text-center">Fitness</h3>
          <HeartCounter initialValue={265} />
          <p className="text-cyan-200 mt-2 text-center">
            These apps provide a range of features, from workout tracking and personalized plans to nutrition advice and motivation, for anyone looking to lead a healthier, more active lifestyle.
          </p>
        </div>

        <div className="bg-gray-800 border-2 border-gray-600 rounded-lg p-4 w-full md:w-1/2 lg:w-1/3 shadow-custom transform transition-transform duration-200 hover:scale-105">
          <div className="flex justify-center mb-4 overflow-hidden rounded-lg">
            <Image src="/images/Ecom_900.png" alt="Shopping" width={200} height={200} className="object-cover transform transition-transform duration-300 hover:scale-110 hover:rounded-3xl rounded-2xl" />
          </div>
          <h3 className="text-2xl text-red-600 mb-2 text-center">Shopping</h3>
          <HeartCounter initialValue={224} />
          <p className="text-cyan-200 mt-2 text-center">
            These apps are designed to enhance the online shopping experience by offering navigation, personalized recommendations, secure payment options, and timely delivery.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
