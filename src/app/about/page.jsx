
import Image from 'next/image';

export default function AboutPage() {
  const authors = [
    {
      name: "Baurma",
      photo: "/images/cat1.jpeg",
      bio: "Baurma is an educator with a passion for helping students navigate the challenges of modern education. When not teaching, she enjoys reading and hiking."
    },
    {
      name: "Daulet Issatayev",
      photo: "/images/cat2.jpeg",
      bio: "Daulet is a food enthusiast and lifestyle blogger who loves exploring new culinary trends. He believes that food is not just nourishment but a way of life."
    },
    {
      name: "Madina",
      photo: "/images/cat3.webp",
      bio: "Madina is a meme aficionado and cultural commentator. She enjoys analyzing internet culture and sharing her insights with the world."
    },
    {
      name: "Alibek Seitov",
      photo: "/images/cat4.jpeg",
      bio: "Alibek is a tech enthusiast and educator. He writes about the intersection of technology and education, and how it can shape the future of learning."
    },
    {
      name: "Uldana",
      photo: "/images/cat5.webp",
      bio: "Uldana is a social media expert and content creator. She shares tips and tricks on how to go viral on platforms like TikTok and Instagram."
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <p className="text-lg mb-6">
        Welcome to our blog! In this page you can find information about group of passionate writers and enthusiasts who love to share their thoughts and insights on various topics. From education to lifestyle, they cover it all.
      </p>
      
      <h2 className="text-3xl font-semibold mb-4">Meet the Authors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {authors.map((author, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex flex-col items-center">
              <Image
                src={author.photo}
                alt={author.name}
                width={150}
                height={150}
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{author.name}</h3>
              <p className="text-gray-700 text-center">{author.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
