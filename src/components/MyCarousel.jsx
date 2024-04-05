import React, { useState, useEffect } from 'react';
import '../App.css';

import openheimer from '../assets/carousel/openheimer.jpg';
import god from '../assets/carousel/god.webp';
import macaco from '../assets/carousel/macaco.jpg';

function MyCarousel() {
  const [index, setIndex] = useState(0);
  const images = [openheimer, god, macaco];
  const captions = [
    {
      title: 'Oppenheimer',
      text: 'Cillian Murphy vive J. Robert Oppenheimer no filme dirigido por Christopher Nolan.',
    },
    {
      title: 'Godzilla Minus One',
      text: 'Cena do longa "Godzilla Minus One".',
    },
    {
      title: 'Planeta dos Macacos: O Reinado',
      text: 'Lançamento de "Planeta dos Macacos: O Reinado".',
    },
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleNext();
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [index]);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <div className="carousel-image-container">
        {images.map((image, idx) => (
          <img
            key={idx}
            className={`carousel-img ${idx === index ? '' : 'hidden'}`}
            src={image}
            alt={`Slide ${idx + 1}`}
          />
        ))}
        <div className="carousel-caption">
          <h3>{captions[index].title}</h3>
          <p>{captions[index].text}</p>
        </div>
      </div>
      <div className="carousel-controls">
        <button className="carousel-control-prev" onClick={handlePrev}>&lt;</button>
        <button className="carousel-control-next" onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
}

export default MyCarousel;
