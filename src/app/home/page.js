'use client';

import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Slide 1',
      description: 'This is the first slide.',
      bgColor: 'bg-blue-500',
    },
    {
      id: 2,
      title: 'Slide 2',
      description: 'This is the second slide.',
      bgColor: 'bg-green-500',
    },
    {
      id: 3,
      title: 'Slide 3',
      description: 'This is the third slide.',
      bgColor: 'bg-red-500',
    },
  ];

  // Slide change logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Slide change every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden h-screen flex items-center justify-center">
      {/* Full height and width for each slide with padding for top-bottom space */}
      <div className="w-60 h-60 relative">
        {/* Render all slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex items-center justify-center transition-transform transform duration-1000 ease-in-out ${
              currentSlide === index ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            } ${slide.bgColor}`}
          >
            {/* Added padding inside the slide content and flex to take full height */}
            <div className="text-center text-white p-8 flex flex-col justify-center h-full">
              <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl">{slide.description}</p>
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

export default HeroSection;
