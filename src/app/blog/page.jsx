

"use client"; 
import { useEffect, useState } from 'react';
import Card from '../../components/card/Card';


const BlogPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
  <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
  <div className="flex flex-col items-center space-y-4">
    {data.map((post) => (
      <Card key={post.id} {...post} />
    ))}
  </div>
</div>
  );
};

export default BlogPage;
