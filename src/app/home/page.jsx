// 'use client';

// import image1 from "@/app/image/s1"; // Ensure the path and file extension are correct
// import image2 from "@/app/image/s2";
// import image3 from "@/app/image/s3";
// import { useState, useEffect } from 'react';
// import Image from 'next/image'; // Importing Next.js Image component

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Correctly structure the slides array with images
//   const slides = [
//     {
//       id: 1,
//       image: image1, // Use the imported image directly
//     },
//     {
//       id: 2,
//       image: image2, // Correctly reference the imported image
//     },
//     {
//       id: 3,
//       image: image3, // Correctly reference the imported image
//     },
//   ];

//   // Slide change logic
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 5000); // Slide change every 5 seconds
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <div className="relative overflow-hidden h-screen flex items-center justify-center">
//       <div className="relative w-full h-full">
//         {/* Render all slides */}
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`absolute inset-0 transition-transform transform duration-1000 ease-in-out ${
//               currentSlide === index ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
//             }`}
//           >
//             <Image
//               src={slide.image}
//               alt={`Slide ${slide.id}`}
//               layout="fill" // Makes the image fill the container
//               objectFit="cover" // Ensures the image covers the container
//               className="w-full h-full" // Full width and height
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation Dots */}
//       <div className="absolute bottom-4 flex justify-center w-full">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 mx-2 rounded-full transition-all duration-500 ${
//               currentSlide === index ? 'bg-white' : 'bg-gray-500'
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroSection;




'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import image1 from "@/app/image/s1.jpg"; // Update with correct path and file extension
import image2 from "@/app/image/s2.jpg"; // Update with correct path and file extension
import image3 from "@/app/image/s3.jpg"; // Update with correct path and file extension

const HomeSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: image1,
      title: 'Slide 1 Title',
      description: 'Description for Slide 1',
    },
    {
      id: 2,
      image: image2,
      title: 'Slide 2 Title',
      description: 'Description for Slide 2',
    },
    {
      id: 3,
      image: image3,
      title: 'Slide 3 Title',
      description: 'Description for Slide 3',
    },
  ];

  // Slide change logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden h-screen flex items-center justify-center">
      <div className="relative w-full h-full">
        {/* Render all slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform transform duration-1000 ease-in-out ${
              currentSlide === index ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={`Slide ${slide.id}`}
              layout="fill" // Makes the image fill the container
              objectFit="cover" // Ensures the image covers the container
              className="w-full h-full" // Full width and height
            />
            <div className="absolute bottom-10 left-0 right-0 text-center text-white bg-black bg-opacity-50 p-4 rounded-md">
              <h2 className="text-lg md:text-2xl font-bold">{slide.title}</h2>
              <p className="text-sm md:text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 flex justify-center w-full">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 mx-2 rounded-full transition-all duration-500 ${
              currentSlide === index ? 'bg-white' : 'bg-gray-500'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HomeSection;
