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
    <article id="banner_article">
        <div id="banner_box">
          <div id="banner_title">
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 0 448 512">
                <path fill="#ffa74e" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
              &nbsp;&nbsp;안전수칙  Check!
              </p>
            <p>&nbsp;알고나면, 안전한 전동차. 안전한 전동차 이용을 위한 꿀팁!</p>
          </div>

        
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

            <div>
            <video className="banner_video" controls autoPlay loop>
              <source src={process.env.PUBLIC_URL + '/banners/banner_safe_video.mp4'} type='video/mp4'></source>
            </video>
            </div>
          </div>
        </div>
    </article>
  );
}

export default Banner;