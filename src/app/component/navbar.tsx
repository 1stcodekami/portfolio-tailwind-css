'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleTouchMove = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsOpen(true);
      timeoutRef.current = window.setTimeout(() => {
        setIsOpen(false);
      }, 3000); // Hide after 3 seconds
    };

    const handleMouseMove = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsOpen(true);
      timeoutRef.current = window.setTimeout(() => {
        setIsOpen(false);
      }, 3000); // Hide after 3 seconds
    };

    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full md:w-95% z-50 bg-black bg-opacity-50 p-4 shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full md:translate-x-0'}`}>
      <nav className="flex flex-col md:flex-row justify-between items-center">
        <div className="logo mb-4 md:mb-0">
          <h2 className="text-2xl text-cyan-400 md:ml-10 md:text-3xl">Kamran</h2>
        </div>
        <ul className="flex flex-col md:flex-row items-center md:gap-20 space-y-2 md:space-y-0 md:space-x-4">
          <li>
            <Link href="/" className={pathname === '/' ? 'text-cyan-400 md:text-2xl' : 'text-white'}>Home</Link>
          </li>
          <li>
            <Link href="/about" className={pathname === '/about' ? 'text-cyan-400 md:text-2xl' : 'text-white'}>About</Link>
          </li>
          <li>
            <Link href="/projects" className={pathname === '/projects' ? 'text-cyan-400 md:text-2xl' : 'text-white'}>Projects</Link>
          </li>
          <li>
            <Link href="/contact" className={pathname === '/contact' ? 'text-cyan-400 md:text-2xl' : 'text-white'}>Contact</Link>
          </li>
        </ul>
        <div className="btn mt-4 md:mt-0">
          <button className="px-4 py-2 bg-black border-2 border-purple-400 text-white rounded hover:bg-pink-500 hover:text-black transition-colors duration-300 md:mr-10">Download CV</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
