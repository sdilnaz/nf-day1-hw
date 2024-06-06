import React from 'react';
import Link from 'next/link';

const Card = ({ id, title, author, date, description }) => {
  return (
    <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h2>
      <p className="mb-3 font-normal text-gray-400 ">by {author} on {new Date(date).toLocaleDateString()}</p>
      <p className="mb-3 font-normal text-gray-700 ">{description}</p>
      <Link href={`/blog/[slug]`} as={`/blog/${id}`}>
        <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Read post
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default Card;
