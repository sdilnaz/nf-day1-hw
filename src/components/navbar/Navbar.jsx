"use client"; 
import React, { useState } from 'react';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <nav className="p-4 shadow-xl" style={{ backgroundColor: '#F3F4F6' }}>
            <div className={`container mx-auto flex ${showNav ? 'flex-col' : 'flex-row'} justify-between items-center`}>
                <a className="text-black font-bold">Personal Blog</a>
                <button className="block lg:hidden" onClick={toggleNav} style={{ outline: 'none' }}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d={showNav ? "M18 6l-6 6-6-6" : "M4 6h16M4 12h16m-7 6h7"}></path>
                    </svg>
                </button>
                <ul className={`${showNav ? 'flex flex-col items-center mt-8' : 'hidden lg:flex lg:flex-row lg:space-x-4'} w-full lg:w-auto`} style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    <li>
                        <a href="/" className="text-gray hover:text-gray-300" style={{ textDecoration: 'none' }}>Home</a>
                    </li>
                    <li>
                        <a href="/about" className="text-gray hover:text-gray-300" style={{ textDecoration: 'none' }}>About</a>
                    </li>
                    <li>
                        <a href="/blog" className="text-gray hover:text-gray-300" style={{ textDecoration: 'none' }}>Blog</a>
                    </li>  
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
