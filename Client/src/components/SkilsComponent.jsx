import React, { useState } from 'react';
import image1 from '../assets/images/Samples/img_1.jpg';
import image2 from '../assets/images/Samples/img_2.jpg';
import image3 from '../assets/images/Samples/img_3.jpg';
import image4 from '../assets/images/Samples/img_4.jpg';
import image5 from '../assets/images/Samples/img_5.jpg';
import image6 from '../assets/images/Samples/img_6.jpg';
import image7 from '../assets/images/Samples/img_7.jpg';

const images = [
  { src: image1, title: "Web Development", skills: "React, Angular" },
  { src: image2, title: "Mobile Development", skills: "React Native, Flutter" },
  { src: image3, title: "Backend Development", skills: "Node.js, Django" },
  { src: image4, title: "DevOps", skills: "Docker, Kubernetes" },
  { src: image5, title: "UI/UX Design", skills: "Figma, Sketch" },
  { src: image6, title: "Data Science", skills: "Python, R" },
  { src: image7, title: "Cloud Computing", skills: "AWS, Azure" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    if (diff > 5) {
      nextSlide();
    } else if (diff < -5) {
      prevSlide();
    }
    setStartX(currentX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const getTransform = (index) => {
    const offset = index - currentIndex;
    const absOffset = Math.abs(offset);
    const scale = 1 - 0.15 * absOffset;
    const translateX = offset * 70;
    const zIndex = 100 - absOffset;

    return {
      transform: `scale(${scale}) translateX(${translateX}%)`,
      zIndex,
      opacity: absOffset > 2 ? 0 : 1,
    };
  };

  return (
    <diV class='mb-20'>
      <div>
        <p className='text-6xl font-bold text-center'>Skils</p>
      </div>
      <div>
        <div
          className="relative w-full max-w-6xl mx-auto mt-8"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden relative flex items-center justify-center">
            <button onClick={prevSlide} className="absolute left-0 z-10 bg-gray-800 text-white p-2 rounded-full">
              &#10094;
            </button>
            <div className="relative flex w-full h-96 items-center justify-center">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="absolute w-72 h-72 md:w-80 md:h-80 bg-white shadow-lg rounded-lg transition-transform duration-500 p-6"
                  style={getTransform(index)}
                >
                  <img
                    src={image.src}
                    alt={`Slide ${index}`}
                    className="w-full h-40 md:h-48 object-cover rounded-md"
                  />
                  <h2 className="mt-4 text-xl md:text-2xl font-semibold">{image.title}</h2>
                  <p className="mt-2 text-gray-600 text-sm md:text-base">{image.skills}</p>
                </div>
              ))}
            </div>
            <button onClick={nextSlide} className="absolute right-0 z-10 bg-gray-800 text-white p-2 rounded-full">
              &#10095;
            </button>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </diV>
  );
};

export default Carousel;
