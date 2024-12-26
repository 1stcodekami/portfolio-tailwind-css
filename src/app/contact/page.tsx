import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className="flex flex-col items-center mt-24 mb-10 px-4">
            <div className="text-center mb-12">
                <h3 className="text-teal-400 mb-2">CONTACT</h3>
                <h1 className="text-4xl text-white mb-6">Contact With Me</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
                <div className="bg-gray-900 border-2 border-gray-800 mb-10 rounded-xl p-6 shadow-custom w-full md:w-1/2 lg:w-1/3 flex flex-col items-center transform transition-transform duration-200 hover:scale-105">
                    <div className="w-3/5 mb-4 overflow-hidden rounded-lg">
                        <Image src="/images/contact_2.png" alt="Contact Us" width={200} height={200} className="transform transition-transform duration-300 hover:scale-110" />
                    </div>
                    <h3 className="text-2xl text-red-600 mb-4">Contact Us</h3>
                    <p className="text-gray-400 mb-4 text-center">Feel free to reach out for any inquiries, collaborations, or just to say hi. I'm always open to new opportunities.</p>
                    <p className="text-gray-400 mb-2"><span className="font-semibold">Phone:</span> +92322xxxx</p>
                    <p className="text-gray-400 mb-2"><span className="font-semibold">Email:</span> abc@example.com</p>
                    <p className="text-gray-400 font-semibold mb-2">FIND WITH ME</p>
                    <div className="flex gap-4">
                        <button className="bg-gray-800 p-2 rounded-lg shadow-md hover:transform hover:-translate-y-1 transition">
                            <FaLinkedin className="text-white text-2xl" />
                        </button>
                        <button className="bg-gray-800 p-2 rounded-lg shadow-md hover:transform hover:-translate-y-1 transition">
                            <FaFacebookF className="text-white text-2xl" />
                        </button>
                        <button className="bg-gray-800 p-2 rounded-lg shadow-md hover:transform hover:-translate-y-1 transition">
                            <FaInstagram className="text-white text-2xl" />
                        </button>
                    </div>
                </div>
                <div className="bg-gray-900 border-2 border-gray-800 rounded-xl p-6 shadow-custom w-full md:w-1/2 lg:w-2/3 flex flex-col items-center text-left">
                    <form className="flex flex-col w-4/5 space-y-4">
                        <label htmlFor="name" className="text-gray-300">Your Name</label>
                        <input type="text" id="name" name="name" required className="w-full p-2 bg-gray-700 border-2 border-red-700 rounded-lg" />

                        <label htmlFor="phone" className="text-gray-300">Phone Number</label>
                        <input type="text" id="phone" name="phone" required className="w-full p-2 bg-gray-700 border-2 border-red-700 rounded-lg" />

                        <label htmlFor="email" className="text-gray-300">Email</label>
                        <input type="email" id="email" name="email" required className="w-full p-2 bg-gray-700 border-2 border-red-700 rounded-lg" />

                        <label htmlFor="subject" className="text-gray-300">Subject</label>
                        <input type="text" id="subject" name="subject" required className="w-full p-2 bg-gray-700 border-2 border-red-700 rounded-lg" />

                        <label htmlFor="message" className="text-gray-300">Your Message</label>
                        <textarea id="message" name="message" required className="w-full p-2 bg-gray-700 border-2 border-red-700 rounded-lg h-32"></textarea>

                        <button type="submit" className="self-center bg-gray-800 text-red-600 px-4 py-2 rounded-lg shadow-md hover:transform hover:-translate-y-1 transition">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
