"use client"; 


import { useEffect, useState } from 'react';

export default function CardPage({ params }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const cardInfo = data.find(item => item.id === Number(params.slug));

  if (!cardInfo) {
    return <div>Card not found</div>;
  }

  return (
    <div className="flex flex-col items-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">{cardInfo.title}</h1>
        <div className="flex items-center mb-4">
          <img src={cardInfo.photo} alt={cardInfo.author} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h2 className="text-lg font-semibold">{cardInfo.author}</h2>
          <p className="text-gray-600">{cardInfo.date}</p>
        </div>
      </div>
      <p className="text-gray-800 mb-4">{cardInfo.description}</p>
    </div>
  </div>
);
}


