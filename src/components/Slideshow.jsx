import React, { useState, useEffect } from 'react';
import './Slideshow.css';

// Updated data structure with your image URL
const images = [
  {
    img: 'https://www.wtcmanila.com.ph/wp-content/uploads/2022/08/rear-view-of-audience-in-the-conference-hall-or-se-2021-08-30-06-51-57-utc-1.jpg',
    detail: 'Audience in Conference Hall'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3DNasCvfOLMIxJyQtbNq7EfLkWnMazHE9xw&s',
    detail: 'A Day of Peace'
  },
  {
    img: 'https://static.mygov.in/media/pmevent/2025/07/eventspm-9999999991756715420.jpg',
    detail: 'Remembering a Legend'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggM43cqXlAxtDYnnPJMMT55Az4wgApcEgVw&s',
    detail: 'Celebrating His Legacy'
  },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalSlides = images.length;

  // Function to go to the next slide with animation
  const goToNextSlide = () => {
    setIsAnimating(true);
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  const goToSpecificSlide = (index) => {
    setCurrentSlide(index);
    setIsAnimating(false);
  };
  
  // useEffect hook to handle auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      // Advance to the next slide every 4 seconds
      goToNextSlide();
    }, 4000); // 4000 milliseconds = 4 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentSlide]); // The dependency array ensures the effect runs only when `currentSlide` changes.
  
  return (
    <div className="slideshow-container">
      <img
        src={images[currentSlide].img}
        alt={images[currentSlide].detail}
        className={`slideshow-image${isAnimating ? ' fade' : ''}`}
        onTransitionEnd={() => setIsAnimating(false)}
      />

      {/* Navigation Arrows */}
      <button className="prev" onClick={goToPrevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={goToNextSlide}>
        &#10095;
      </button>

      {/* Bottom Control Bar */}
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="caption">
            <span className="camera-icon">📷</span>
            {images[currentSlide].detail}
          </div>
          <div className="dots-container">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSpecificSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;