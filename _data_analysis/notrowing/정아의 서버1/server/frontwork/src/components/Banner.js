import React, { useState, useEffect } from 'react';
import '../css/Banner.css';
const Banner = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const images = [
    '/banners/banner_safe1.jpg',
    '/banners/banner_safe2.png',
    '/banners/banner_safe3.jpg',
    '/banners/banner_safe4.jpg',
    '/banners/banner_safe5.jpg'
  ];

  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [imgIndex]);

  const nextImage = () => {
    setImgIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setImgIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="banner-container">
      <button onClick={prevImage} className="banner_btn">
        {/* Previous */}
        &lt;
      </button>
      <img src={ process.env.PUBLIC_URL + images[imgIndex]} alt={`Image ${imgIndex + 1}`} className="banner_image" />
      <button onClick={nextImage} className="banner_btn">
        {/* Next */}
        &gt;
      </button>
    </div>
  );
};

export default Banner;